sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fiorieleincident',
            componentId: 'IncidentFlowObjectPage',
            contextPath: '/Incidents/incidentFlow'
        },
        CustomPageDefinitions
    );
});