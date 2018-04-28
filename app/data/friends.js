///////////////////////////////////////////////////////
var express = require("express");

var app = express();
var PORT = 3030;
///////////////////////////////////////////////////////    
var friend = {
    "type": "female",
    "name": "Nancy",
    "title": "Teacher",
    "choices": ["Yes", "No"]
};
var hobbies            
    "type": "checkbox",
    "name": "two",
    "title": "Checkbox question (orange)",
    "choices": ["One", "Two"]
};
    "type": "radiogroup",
    "name": "three",
    "title": "Required question (red title)",
    "isRequired": true,
    "choices": ["Yes", "No"]
        }

    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root = "sq-root sq-root-cb";
        }
    });

$("#surveyElement").Survey({model: survey});