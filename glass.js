function writeHTMLasJS(){
document.write("<link rel=\"stylesheet\" type=\"text\/css\" href=\"gStyle.css\">");
document.write("<div class=\"gContainer\"><div class=\"gMobile\"><a id=\"gMobile\" href=\"#gMobile\"><span class=\"icon-mobile><\/a>");
document.write("<div class=\"gTablet\"><a id=\"gTablet\" href=\"#gTablet\"><span class=\"icon-Tablet><\/a>");
document.write("<div class=\"gDesktop\"><a id=\"gDesktop\" href=\"#gDesktop\"><span class=\"icon-Desktop><\/a>");

}
function init() {
	 if (window.location.hash) {
            document.getElementById("gTablet")
            	document.write("<meta name=\"viewport\" content=\"width=1281px\">");
            }
        }
function init() {
	 if (window.location.hash) {
            document.getElementById("gTablet")
            	document.write("<meta name=\"viewport\" content=\"width=600px\">");
            }
        }
        if (window.location.hash) {
            document.getElementById("gMobile")
            	document.write("<meta name=\"viewport\" content=\"width=320px\">");
            }

 //*Notebook: <meta name ="viewport" content="width=device width">