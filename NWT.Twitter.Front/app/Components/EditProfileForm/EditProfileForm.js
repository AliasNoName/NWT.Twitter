System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EditProfileForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditProfileForm = (function () {
                function EditProfileForm() {
                    this.outValue = new core_1.EventEmitter();
                }
                EditProfileForm.prototype.onChangeValue = function (data) {
                    this.outValue.next(data.value);
                };
                EditProfileForm = __decorate([
                    core_1.Component({
                        selector: "edit-profile-form",
                        inputs: ["inLabel", "inValue", "typeOfData"],
                        outputs: ["outValue"]
                    }),
                    core_1.View({
                        template: "\n        <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">{{inLabel}}</label>\n            <div class=\"col-lg-8\">\n              <input (change) = \"onChangeValue(data)\" #data class=\"form-control\" type={{typeOfData}} value={{inValue}}>\n            </div>\n        </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditProfileForm);
                return EditProfileForm;
            }());
            exports_1("EditProfileForm", EditProfileForm);
        }
    }
});
//# sourceMappingURL=EditProfileForm.js.map