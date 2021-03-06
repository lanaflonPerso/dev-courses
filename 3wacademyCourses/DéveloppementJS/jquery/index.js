'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES **************************************** */
/*************************************************************************************************/

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

$.getJSON("https://api.puzzledge.org/words", {
        limit: 50,
        offset: 40
    },
    function(data) {
        console.log(data.result);
        // console.log(data.result[0].lema);
        // console.log(data.result[0]);

        var items = data.result;

        items.forEach(function(elem){
          document.write(elem.lema + " : ");
          document.write(elem.definitions[0].definition + "<br>");
        });

        // $.each(data, function(key, val) {
        //     items.push("<li id='" + key + "'>" + val + "</li>");
        // });
        //
        // $("<ul/>", {
        //     "class": "my-new-list",
        //     html: items.join("")
        // }).appendTo("body");

    });

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
