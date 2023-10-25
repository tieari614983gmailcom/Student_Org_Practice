({
	helperMethod : function(component, event) {
		var btn = event.getSource();
        var msg = btn.get("v.label");
        if(msg == "Label Click ME")
        {
          component.set("v.Message", msg);  
        }
        else if(msg == "Label Click ME too")
        {
            component.set("v.Message2", msg);  
        }

	}
})