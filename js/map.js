var map = {
    MIN_TABLE_NUMBER: 1,
    MAX_TABLE_NUMBER: 117,  // TODO: update

    resetTables: function() {
	      for (i = map.MIN_TABLE_NUMBER; i <= map.MAX_TABLE_NUMBER; i++) {
	          var table = document.getElementById("table" + i.toString());
	          if (table == null)
		            continue;

	          table.classList.remove("highlight");
	      }

        // TODO: update to hide companies across all days
    },

    highlightTable: function(table_id) {
	      var table = document.getElementById("table" + table_id.toString());
	      table.classList.add("highlight");
    },

    /*
     * options = {
     *   company_ids: [1,2,3],
     *   day: 0
     * }
     */
    highlightCompanies: function(options) {

        map.resetTables();

        options.company_ids.forEach(function(company_id, index, array) {
            var company = data[company_id];

            if (company.tables[options.day] != null)
                map.highlightTable(company.tables[options.day]);
        });
    },

    /*
     * Load the map files in the background.
     */
    loadMaps: function() {
        $("#map_svg_0").load("/static/map.svg");
        // TODO: update to support loading maps for multiple days.
    },

    /*
     * Show the correct map for a given day, hiding the others.
     */
    showMap: function(day) {
        $(".map_svg").addClass("hidden");
        $("#map_svg_" + day.toString()).removeClass("hidden");
    }
};
