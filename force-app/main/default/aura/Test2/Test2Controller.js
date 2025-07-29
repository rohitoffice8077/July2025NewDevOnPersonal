({
	myass : function(component, event, helper) {
        var data = {'Name':'Rohit','Class':'12th'};
        component .set("v.jsdata",data);
		component.set("v.var1","Rohit Sisodia");
        component.set("v.userData",{'mystring1':'rohit','myInteger':56});
	},
     handleClick : function(component, event, helper)
    {
    	//component.set("v.msg",'Hiiiiii');
    	var btn = event.getSource();
        var msg=btn.get("v.label");
        component.set("v.msg",msg);
    },
    handleClick2: function(component,event,helper)
    {
        component.set("v.msg2",'Hello');
    }
})