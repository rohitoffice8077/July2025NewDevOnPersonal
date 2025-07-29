public with sharing class oppController {
    @AuraEnabled(cacheable=true)
    public static List<OpportunityLineItem> getOpportunityLineItem(String oppId) {
        return [
            SELECT Id, Name, OpportunityId, Quantity, ServiceDate 
            FROM OpportunityLineItem 
            WHERE OpportunityId = :oppId
        ];
    }
}