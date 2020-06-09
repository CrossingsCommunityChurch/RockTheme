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
        <Rock:Zone Name="Sub Feature" runat="server" />
        <Rock:Zone Name="Section A" runat="server" />
        <Rock:Zone Name="Section B" runat="server" />
        <Rock:Zone Name="Section C" runat="server" />
        <Rock:Zone Name="Section D" runat="server" />
        <!-- End Content Area -->
</div>
</asp:Content>

