 console.log("content  script");

window.addEventListener("message", async function(event) {
    if (event.source == window && 
        event.data.app && event.data.app == "bigsearch-edit" &&
        event.data.direction && event.data.direction == "page-to-content"
    ) 
    {
        console.log("Content script received message event:\n" , event);
        
        const recMessage = event.data.message;
        
        if (recMessage == "getVersion" ) {
            window.postMessage({
                direction: "content-to-page",
                app: "bigsearch-edit",
                bsExtVersion: chrome.runtime.getManifest()['version']
            }, document.location.href);
        }
        
        if (recMessage == "getExtUsercustom") {
            window.postMessage({
                direction: "content-to-page",
                app: "bigsearch-edit",
                extUsercustom: await ext_read_usercustom_engines()
            }, document.location.href);
        }
        
        if (recMessage == "setExtUsercustom") {
            var saveresult = await ext_save_json_to_usercustom(event.data.usercustomJson);
            
            if (saveresult)
                window.postMessage({
                    direction: "content-to-page",
                    app: "bigsearch-edit",
                    message: "text",
                    messageContent: {status: "success" , text: "Successfully saved to extension"}
                }, document.location.href);
            else
                window.postMessage({
                    direction: "content-to-page",
                    app: "bigsearch-edit",
                    message: "text",
                    messageContent: {status: "fail" , text: "Failed to save your data\n\nWere you trying to save a too large data? The limitation is about 20-30 kB.\n\nContact developer if you still have problems."}
                }, document.location.href);
                
        }
    }
});
