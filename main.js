<div class="container">
<h2>Vertical (basic) form</h2>
<form id="stuForm" method="post">
<div class="form-group">
<span><label for="stuId">Student  ID:</label> <label id="stuIdMsg">
</label></span>
<input type="text" class="form-control" name="stuId" id="stuId"
placeholder="Enter Student ID" required>
</div>
<div class="form-group">
<label for="stuName">Student Name:</label>
<input type="text" class="form-control" id="stuName"
placeholder="Enter Student Name" name="stuName">
</div>
<div class="form-group">
<label for="stuEmail">Class:</label>
<input type="Number" class="form-control" id="stuClass"
placeholder="Enter Student Class" name="stuClass">
</div>
 <div class="form-group">
<label for="stuBirthDate">BirthDate:</label>
<input type="Date" class="form-control" id="stuBirthDate"
 name="stuBirthDate">
</div>
 <div class="form-group">
<label for="stuAddress">Address:</label>
<input type="text" class="form-control" id="stuAddress"
placeholder="Enter Address" name="stuAddress">
</div>
 <div class="form-group">
<label for="stuEnrollmentDate">EnrollmentDate:</label>
<input type="Date" class="form-control" id="stuEnrollmentDate"
placeholder="Enter Enrollment Date" name="stuEnrollmentDate">
</div>
<input type="button" class="btn btn-primary" id="stuSave" value="Save"
onclick="saveStudent();">
</form>
</div>
<script>
$("#stuId").focus();
function validateAndGetFormData() {
var stuIdVar = $("#stuId").val();
if (stuIdVar === "") {
alert("Student Roll-No Required Value");
$("#stuId").focus();
return "";
}
var stuNameVar = $("#stuName").val();
if (stuNameVar === "") {
alert("Student Name is Required Value");
$("#stuName").focus();
return "";
}
var stuEmailVar = $("#stuClass").val();
if (stuEmailVar === "") {
alert("Student Class is Required Value");
$("#stuClass").focus();
return "";
}
var stuEmailVar1 = $("#stuBithDate").val();
if (stuEmailVar1 === "") {
alert("Student BirthDate is Required Value");
$("#stuBirthDate").focus();
return "";
}
var stuEmailVar2 = $("#stuAddress").val();
if (stuEmailVar2 === "") {
alert("Student Address is Required Value");
$("#stuAddress").focus();
return "";
}
var stuEmailVar3 = $("#stuEnrollmentDate").val();
if (stuEmailVar3 === "") {
alert("Student EnrollmentDate is Required Value");
$("#stuEnrollmentDate").focus();
return "";
}
var jsonStrObj = {
stuId: stuIdVar,
stuName: stuNameVar,
stuClass:stuEmailVar,
stuBithDate: stuEmailVar1,
stuAddress:stuEmailVar2,
stuEnrollmentDate:stuEmailVar3


};
return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
var putRequest = "{\n"
+ "\"token\" : \""
+ connToken
+ "\","
+ "\"dbName\": \""
+ dbName
+ "\",\n" + "\"cmd\" : \"PUT\",\n"
+ "\"rel\" : \""
+ relName + "\","
+ "\"jsonStr\": \n"
+ jsonObj
+ "\n"
+ "}";
return putRequest;
}
function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
var url = dbBaseUrl + apiEndPointUrl;
var jsonObj;
$.post(url, reqString, function (result) {
jsonObj = JSON.parse(result);
}).fail(function (result) {
var dataJsonObj = result.responseText;
jsonObj = JSON.parse(dataJsonObj);
});
return jsonObj;
}
function resetForm() {
$("#stuId").val("");
$("#stuName").val("");
$("#stuEmail").val("");
$("#stuId").focus();
}
function saveStudent() {
var jsonStr = validateAndGetFormData();
if (jsonStr === "") {
return;
}
var putReqStr = createPUTRequest("90932762|-31949278653115376|90948444",
jsonStr, "SAMPLE", "STU-REL");
alert(putReqStr);
jQuery.ajaxSetup({async: false});
var resultObj = executeCommand(putReqStr,
"http://api.login2explore.com:5577", "/api/iml");
alert(JSON.stringify(resultObj));
jQuery.ajaxSetup({async: true});
resetForm();
}
</script>
