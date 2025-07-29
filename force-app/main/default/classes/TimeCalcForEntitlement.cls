global class TimeCalcForEntitlement implements Support.MilestoneTriggerTimeCalculator {
    
    global integer calculateMilestoneTriggerTime(String caseId, String milestoneTypeId){
        Long totalDurationSpent = 0;
        Long p1fst=15;
        Long p2fst=30;
        Long p3fst=60;
        integer msTimeInMts=0;
        Case c = [SELECT Id,Priority,createdDate FROM Case WHERE Id=:caseId];
        MilestoneType mt = [SELECT Id,Name FROM MilestoneType WHERE Id=:milestoneTypeId];
        Long customFieldLong = c.Createddate.getTime();
        Long CreHelper=customFieldLong/60000;
        integer y= integer.valueof(CreHelper);
        Long currentDTLong = DateTime.now().getTime();
        Long milliseconds = currentDTLong - customFieldLong;
        Long seconds = milliseconds / 1000;
        Long minutes = seconds / 60;
        totalDurationSpent = minutes;
        long x;
        if(mt.Name=='First Response Apex Class')
        {
            msTimeInMts=0;
            if(p1fst-totalDurationSpent>0)
            {
            system.debug('High');
            system.debug('timespent-> '+totalDurationSpent);
            x=p1fst-totalDurationSpent;
            msTimeInMts=integer.valueof(x);
            system.debug('Cretyead---->'+y);
            system.debug('MsTimemts----->'+msTimeInMts);  
            }
        }
        else if(mt.Name=='TestApexMedium')
        {
            msTimeInMts=0;
            if(p2fst-totalDurationSpent>0)
            {
            system.debug('Medium');
            system.debug('timespent-> '+totalDurationSpent);
            x=p2fst-totalDurationSpent;
            msTimeInMts=integer.valueof(x);
            system.debug('Cretyead---->'+y);
            system.debug('MsTimemts----->'+msTimeInMts);  
            }
        }
        else if(mt.Name=='TestApexLow')
        {
            msTimeInMts=0;
            if(p3fst-totalDurationSpent>0)
            {
            system.debug('Low');
            system.debug('timespent-> '+totalDurationSpent);
            x=p3fst-totalDurationSpent;
            msTimeInMts=integer.valueof(x);
            system.debug('Cretyead---->'+y);
            system.debug('MsTimemts----->'+msTimeInMts);  
            }
        }
        return msTimeInMts;
    }

}