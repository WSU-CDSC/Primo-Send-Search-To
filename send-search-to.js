// add Google Scholar and WolrdCat Local Facets
jQuery(document).ready(function() {
	var search_string = "";
	if($("#search_field").length > 0)	// basic search
		search_string = $("#search_field").val();
	else if($("#input_freeText0").length > 0 && $("#input_freeText1").length > 0 && $("#input_freeText2").length > 0)	// advanced search
		search_string = $("#input_freeText0").val() + " " + $("#input_freeText1").val() + " " + $("#input_freeText2").val();
	$("#facetList").append('<div class="OtherPlacesToSearchContainer"><h4>Other Places to Search</h4><ol class="EXLFacetsList EXLFacetsListPreview"><li><a href="'+google_scholar_search_url+encodeURIComponent(search_string)+'" title="Search Google Scholar">'+search_google_scholar_label+'</a></li><li><a href="'+worldcat_search_url+encodeURIComponent(search_string)+'" title="Search WorldCat">'+search_worldcat_label+'</a></li></ol></div>');
});
