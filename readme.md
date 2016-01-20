## Send Search To WorldCat and/or Google Scholar Facets

### System Components
 - PBO

### Skillset Requirements
- PBO (to Update your Primo Theme to add Custom JavaScript)
- Basic JavaScript Skills

### Implementation (Recipe) Steps

#### Step 1) Add initial code and configuration to your Primo Theme
To add this feature, you will need to include the send-search-to.js JavaScript file and a few variable parameters in your Primo Theme. Copy the following code into your Primo Theme.

```html
<!-- Adds Facets for Sending the Current Search to WorldCat and/or Google Scholar -->
<script>
var search_google_scholar_label = "Search Google Scholar";
var google_scholar_search_url = "http://proxy.yourlibrary.edu/proxy?url=http://scholar.google.com/scholar?q=";
var search_worldcat_label = "Search WorldCat";
var worldcat_search_url = "https://yourlibrary.on.worldcat.org/search?&queryString=";
</script>
<script src="//www.yourlibrary.edu/js/send-search-to.js"></script>
```

#### Step 2) Include JavaScript File

The JavaScript file send-search-to.js needs to be uploaded to Primo or a web server. Once the file has been uploaded, the following line must be updated to point to the file's location:

If you upload the JavaScript file to an external web server:
```html
<script src="//www.yourlibrary.edu/js/send-search-to.js"></script>
```

If you upload the JavaScript file via Primo Back Office (PBO):
```html
<script src="//{PRIMO SERVER DOMAIN NAME}/primo_library/libweb/uploaded_files/{VIEW NAME}/send-search-to.js"></script>
```
{PRIMO SERVER DOMAIN NAME} - the domain for your Primo website (e.g. alliance-primo.hosted.exlibrisgroup.com)
{VIEW NAME} - the name of the Primo view for which the file was uploaded

#### Step 3) Configuration
There are 4 variable parameters to configure. If you do not want to use one of the facets, you can set the label and url to be blank for that option.
- search_google_scholar_label - the link text for the Google Scholar Facet
- google_scholar_search_url - the Google Scholar url the search terms will be appended to
- search_worldcat_label - the link text for the WorldCat Facet
- google_scholar_search_url - the WorldCat url the search terms will be appended to
