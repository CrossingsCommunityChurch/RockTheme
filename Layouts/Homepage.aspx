<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">
<div class="home page-wrapper">
        <div class="container-fluid hero-wrapper navOn">
            <div class="hero" style="overflow:hidden;">
                <div class="Masthead" style="height: 80vh;">
                    <div class="is-parallax Masthead__image">
                        <img src="https://vigilant-hermann-e71ba3.netlify.app/img/choir.4080243c.jpg">
                    </div>
                </div>
                <div class="jumbotron flat home-hero transparent reverse delay2 fadein enter">
                    <div class="text-slider">
                        <div class="text-set set-1">
                            <h1 class="heading reverse">Heading</h1>
                            <h3 class="subheading reverse">Another Subheading</h3>
                        </div>
                        <div class="text-set set-2">
                            <h3 class="subheading reverse">Be Known by</h3>
                            <h1 class="heading reverse">Love</h1>
                        </div>
                        <div class="text-set set-3">
                            <h3 class="subheading reverse">Be a Voice of</h3>
                            <h1 class="heading reverse">Hope</h1>
                        </div>
                        <div class="text-set set-4">
                            <h3 class="subheading reverse">Live by</h3>
                            <h1 class="heading reverse">Faith</h1>
                        </div>
                    </div>
                    <div class="lead-buttons">
                        <a href="#" class="btn btn-primary btn-latest">
                            <i class="fas fa-play"></i><span>Watch Latest Message</span>
                        </a>
                        <a href="#" class="btn btn-primary">
                            <span>Locations &amp; Service Times</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Rock:Zone Name="Feature" runat="server" />
</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
        <!-- Start Content Area -->

        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error no-index" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
        <!-- place this in a zone -->
        <div class="container-fluid section bgimg reverse simple-section-with-image" style="background-image: url('https://vigilant-hermann-e71ba3.netlify.app/img/worship.4eedf85a.jpg');">
            <div class="row">
                <div class="container content-area">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="subheading">Sanctuary | Venue</h4>
                            <h2 class="heading">Worship Music</h2>
                            <hr class="sep">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend.</p>
                            <a href="#" class="btn btn-primary">
                                <i class="fas fa-play"></i><span>Listen</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid section split-section split-section-with-images reverse">
            <div class="row flex-row">
                <div class="col-md-6 bgimg split-section-text">
                    <div style="background-image: url('https://vigilant-hermann-e71ba3.netlify.app/img/teaching-series.cbf32bdb.jpg');">
                        <div>
                            <h4 class="reverse subheading">Teaching Series and Group</h4>
                            <h2 class="reverse heading">Wednesday Nights</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" class="btn btn-primary">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 bgimg split-section-text">
                    <div style="background-image: url('https://vigilant-hermann-e71ba3.netlify.app/img/small-group.8d0cdbac.jpg');">
                        <div>
                            <h4 class="reverse subheading">LifeCare</h4>
                            <h2 class="reverse heading">Counseling &amp; Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" class="btn btn-primary">
                            <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid section simple-section">
            <div class="row">
                <div class="container content-area">
                    <div class="row">
                        <div class="col-md-12">
                                <h4 class="subheading">Children's Center | Community Center | Community Clinic | Prison Campuses</h4>
                                <h2 class="heading">LIVE BY FAITH. BE A VOICE OF HOPE.<br>BE KNOWN BY LOVE.</h2>
                                <hr class="sep">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim. Vestibulum ut orci maximus, ultricies mi at, bibendum turpis.</p>
                                <div class="buttons">
                                    <a href="#" class="btn btn-primary">
                                        <span>Get Involved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Rock:Zone Name="Sub Feature" runat="server" />
        <Rock:Zone Name="Section A" runat="server" />
        <Rock:Zone Name="Section B" runat="server" />
        <Rock:Zone Name="Section C" runat="server" />
        <Rock:Zone Name="Section D" runat="server" />
        <!-- End Content Area -->
</asp:Content>

