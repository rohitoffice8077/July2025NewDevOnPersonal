/**
* @File Name : OpportunityLineItemController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : February 4, 2025
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | February 4, 2025 |   | Initial Version
**/


public with sharing class OpportunityLineItemController {
    @AuraEnabled(cacheable=true) // Consider caching for performance if appropriate
    public static List<OpportunityLineItem> getOpportunityLineItems(Id opportunityId) {
        if (String.isBlank(opportunityId)) {
            throw new AuraHandledException('Opportunity ID cannot be blank.');
        }
        return [SELECT Id, Name, Quantity, UnitPrice, TotalPrice, Product2.Name // Add other fields as needed
                FROM OpportunityLineItem
                WHERE OpportunityId = :opportunityId];
    }
}