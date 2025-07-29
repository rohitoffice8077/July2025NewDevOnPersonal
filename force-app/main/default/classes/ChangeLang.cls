public with sharing class ChangeLang {
@AuraEnabled(cacheable=true)
public static string changeToLang(String lang) {
    String currentuserId = UserInfo.getUserId();
    User currentUserInfo = [select LanguageLocaleKey from User where Id = :UserInfo.getUserId()];
    currentUserInfo.LanguageLocaleKey = lang;
    update currentUserInfo;
    return 'OK';
}
@AuraEnabled
public static string changeToLang2(String lang) {
    String currentuserId = UserInfo.getUserId();
    User currentUserInfo = [select LanguageLocaleKey from User where Id = :UserInfo.getUserId()];
    //currentUserInfo.LanguageLocaleKey = 'de';
    //update currentUserInfo;
    //return currentUserInfo.LanguageLocaleKey;
    if(lang=='German')
    {
        currentUserInfo.LanguageLocaleKey = 'de';
        system.debug('I am inside condition---->de');
    }
    else if(lang =='English')
    {
        currentUserInfo.LanguageLocaleKey ='en_US';
        system.debug('I am inside condition---->en_US');
    }
    update currentUserInfo;
    return 'OK' +' '+lang+' '+ currentUserInfo.LanguageLocaleKey+' '+currentUserInfo.id;
}
}