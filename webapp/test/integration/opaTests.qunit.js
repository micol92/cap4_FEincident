sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fiorieleincident/test/integration/FirstJourney',
		'fiorieleincident/test/integration/pages/IncidentsList',
		'fiorieleincident/test/integration/pages/IncidentsObjectPage',
		'fiorieleincident/test/integration/pages/IncidentFlowObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage, IncidentFlowObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fiorieleincident') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage,
					onTheIncidentFlowObjectPage: IncidentFlowObjectPage
                }
            },
            opaJourney.run
        );
    }
);