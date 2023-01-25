# CMPM118_Win23_avatar

## Mturk page

You need to create a mturk page for each task. Based on the Mturk interface you suppose to put everything in one html file. This is causing prombel if you want to design a nice page. Here are a few solutions:

## Solution 1: Impliment everything including your js in one html page

`example_mturk1.html` This is an exmple of put everhing in on html page.


## Solution 2: Use react to build your page
Under folder `hair_tag_react` is the previous project of hair tagging. You can use it as a template to build your page. How to run it: refer to the `README.md` file in the folder.

In order to use this solution, you need to build a react website and host it as a static website. You can use github pages to host your website. Here is a tutorial: https://www.youtube.com/watch?v=2MsN8gpT6jY

After hosting you page, we use `iframe` in the mturk page to call your page, you can refer to `mturk_page_link_to_url.html` for an example. 

*** Need help1 : Mturk has the option of providing you own link instead of doing this comlicated thing ***


*** Need help2 : Mturk has the API to let you automcailly create new turk tasks from you python script without using your web interface. Need to figure this out also ***
