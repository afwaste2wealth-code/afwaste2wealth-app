/* A&F Wekavera — read-only modernization diagnostics. No ledger or stock writes. */
(function (root) {
  'use strict';
  function inspect(storage) {
    const result = {version:1, mode:'READ_ONLY', checkedAt:new Date().toISOString(), keys:[], warnings:[], staging:{status:'not_found', entryCount:0, balanced:null}, records:{}};
    for(let i=0;i<storage.length;i++) result.keys.push(storage.key(i));
    result.keys.sort();
    const known = ['afAccountingV1Staging','materialRecords','afSupplierPurchases','expenses','expenseRecords','afSupplierSettlementAdjustmentsV1','afStage5HistoricalCorrectionsV1'];
    for (const key of known) {
      const raw=storage.getItem(key);
      if(raw===null) { result.records[key]={present:false}; continue; }
      try { const parsed=JSON.parse(raw); result.records[key]={present:true,kind:Array.isArray(parsed)?'array':typeof parsed,count:Array.isArray(parsed)?parsed.length:null};
        if(key==='afAccountingV1Staging') {
          const entries=Array.isArray(parsed.entries)?parsed.entries:null;
          if(!entries) {result.staging.status='incompatible'; result.warnings.push('Staging ledger has no entries array');}
          else { let debit=0,credit=0,invalid=0; const ids=new Set(), duplicates=[];
            for(const e of entries){const id=e.sourceId || e.id; if(id){if(ids.has(id))duplicates.push(id); ids.add(id);} for(const l of (Array.isArray(e.lines)?e.lines:[])){const d=Number(l.debit),c=Number(l.credit);if(!Number.isFinite(d)||!Number.isFinite(c)||d<0||c<0)invalid++;else {debit+=d;credit+=c;}}}
            result.staging={status:'present',entryCount:entries.length,debit,credit,balanced:invalid===0&&Math.abs(debit-credit)<0.005,invalidLines:invalid,duplicateSourceIds:duplicates};
            if(duplicates.length)result.warnings.push('Duplicate staging source IDs detected');
            if(!result.staging.balanced)result.warnings.push('Staging ledger not balanced or contains invalid lines');
          }
        }
      } catch(e) {result.records[key]={present:true,parseError:true};result.warnings.push('Cannot parse '+key);}
    }
    result.warnings.push('Browser storage is not a secure shared company database; this diagnostic is not an accounting reconciliation.');
    return result;
  }
  function downloadReport(storage) {
    const report=inspect(storage);const blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AF_Modernization_Diagnostics_READ_ONLY.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);return report;
  }
  root.AFModernizationDiagnostics={inspect,downloadReport};
  if(typeof module!=='undefined'&&module.exports)module.exports={inspect};
})(typeof window!=='undefined'?window:globalThis);
