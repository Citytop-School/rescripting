document.addEventListener("DOMContentLoaded", function(e){
    tabs = ["welcome", "html", "android", "scratch", "python"]

    FOR_EACH = function(list, ext){
        for ( i=0; i<list.length; i++) ext(i, list[i])
    }

    switch_tab = function(ls){
    FOR_EACH(ls, function(i, e){
        f = document.querySelector("#tab-"+ls[i])
        f.onclick = function(e){
            document.querySelector("#tab-view-welcome").style.display = "none"
            for (j=0; j<ls.length; j++){
                typ = e.target.id.split("-")[1]
                _ = document.querySelector("#tab-"+ls[j]).parentElement
                __ = document.querySelector("#tab-view-"+ls[j])
                if ( typ === ls[j] ){
                    __.style.display = "flex"
                    _.className = "tabs tab-selected"
                }
                else {
                    __.style.display = "none"
                    _.className = "tabs"
                }
            }
        }
    })
   }

   switch_tab(tabs)
   document.querySelector("#tab-welcome").click()
})