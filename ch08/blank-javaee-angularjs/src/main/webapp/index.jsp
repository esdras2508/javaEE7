<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <title>
        XeNoNiQUE :: 2016 :: BLANK JAVA EE ANGULARJS EXAMPLE
    </title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="XeNoNiQUE">
    <meta name="author" content="Peter Pilgrim">

    <!-- Les Bootstrap styles -->
    <link href="styles/bootstrap.css" rel="stylesheet">
    <link href="styles/main.css" rel="stylesheet">
</head>

<body ng-controller="AcmeController">
<!-- NAVBAR
================================================== -->

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img id="brandNavbarLogo" src="images/xen-national-force-emblem-128w.png" /></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Technology <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Digital Java EE 7</a></li>
                        <li><a href="#">Java EE 7</a></li>
                        <li><a href="#">AngularJS</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Peter Pilgrim Blob</a></li>
                        <li class="divider"></li>
                        <li><a href="#">RESTful Services</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="http://en.wikipedia.org/wiki/Digital_marketing">Digital</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Popular <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="main-content">

    <h1> BLANK ANGULAR JS ACME DEMO </h1>


    <div class="other-content">

        <h2> Sample Form </h2>
        <form name="exampleForm" class="acme-container-form  css-form" novalidate>
            Title:<br />
            <input type="text" ng-model="employee.title" required /><br />
            <br/>
            First Name:<br />
            <input type="text" ng-model="employee.firstName" required /><br />
            <br/>
            Last Name:<br />
            <input type="text" ng-model="employee.lastName" required /><br />
            <br/>
            Employee Id:<br />
            <input type="text" ng-model="employee.employeeId" required /><br />
            <br/>
            Comment:<br />
            <input type="text" ng-model="employee.comment" required /><br />
            <br/>
        </form>
    </div>


    <div class="other-content">
        <div class="alert-info">
            <p>
                Now make this application work! Do as you please.
            </p>

            <p>
                <a href="<%= request.getContextPath()%>/rest/sample/hello"> Hyperlink HTTP GET Request to the Sample Endpoint </a>
            </p>
            <p>
                NB: We use JavaServer Pages to gain access to the Servlet Request Context, in order to set up the Hyperlink correctly.
            </p>
        </div>
    </div>

    <div class="other-content">
        <h2> Employee Data</h2>
        <p>
            Information
            <table class="table table-bordered acme-container-table">
                <tr>
                    <th>Name</th> <th>Value</th>
                </tr>
                <tr>
                    <td>Title</td><td> {{ employee.title }}</td>
                </tr>
                <tr>
                    <td>First Name</td><td> {{ employee.firstName }}</td>
                </tr>
                <tr>
                    <td>Last Name</td><td> {{ employee.lastName }}</td>
                </tr>
                <tr>
                    <td>Employee Id</td><td> {{ employee.employeeId }}</td>
                </tr>
                <tr>
                    <td>Comment</td><td> {{ employee.comment }}</td>
                </tr>
            </table>
        </p>
    </div>
</div>

<div class="container fatbottom">
    <hr class="featurette-divider">
    <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>

        <p>&copy; 2015, 2016 XeNoNiQUe, UK &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        <p class="slogan"> I can definitely help you.</p>
        <p>
            <a href="https://glassfish.java.net/"> <img src="images/glassfish_logo.jpg" width="128" height="65"/> </a>
            <a href="http://twitter.com/peter_pilgrim"> <img src="images/twitter-bird-white-on-blue.png" width="64" height="64" /> </a>
            <a href="https://plus.google.com/117513042687634436539/posts"> <img src="images/Google-Plus-Logo.png" width="64" height="64" /> </a>
        </p>
    </footer>
</div>

<!-- <script src="http://code.jquery.com/jquery-latest.js"></script> -->
<!-- <script src="http://code.jquery.com/jquery-2.1.3js"></script> -->
<script src="javascripts/jquery-2.1.3.js"></script>
<script src="javascripts/angular.js"></script>
<script src="javascripts/bootstrap.js"></script>
<script src="javascripts/ui-bootstrap-tpls-0.12.1.js"></script>
<script src="app/controllers/main.js"></script>
</body>
</html>

<!--

=========================================================================================
=========================================================================================
=========================================================================================

Created by Peter Pilgrim (c) 2015 using some most excellent tools:
 On the client side: Twitter Bootstrap, AngularJS and JQuery
 On the server side: Java EE 7 GlassFish 4.1

 Need Development Help? "I can definitely help you"

=========================================================================================
=========================================================================================
=========================================================================================

-->