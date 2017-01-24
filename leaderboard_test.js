#!/bin/env node
"use strict";

var Leaderboard = require("./leaderboards");

var settings = {
	express_ipaddr : process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
	express_port : process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
	dbName : "leaderboards",
	psql_db_host : process.env.OPENSHIFT_PSQL_DB_HOST || "127.0.0.1",
	psql_db_port : process.env.OPENSHIFT_PSQL_DB_PORT || 27018,
	pwd : "",
	appIDs : {		
		"pipelinemanager" : "apple",				//appID : secret
		"messageontheblock" : "pie"
	}
};

var lb = new Leaderboard(settings);

lb.start();
