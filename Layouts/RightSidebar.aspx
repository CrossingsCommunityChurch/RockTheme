<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
        <Rock:Zone Name="PageHeading" runat="server" />
        <!-- Start Content Area -->
        <div class="Main">
        <!-- Breadcrumbs -->
        <Rock:PageBreadCrumbs ID="PageBreadCrumbs" runat="server" />

        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error no-index" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
        <Rock:Zone Name="Feature" runat="server"/>
        <div class="container main padding-top-xl">
            <div class="row">
                <div class="col-md-8">
                    <Rock:Zone Name="Main" runat="server" />
                </div>
                <div class="col-md-4">
                    <Rock:Zone Name="Sidebar 1" runat="server" />
                </div>
            </div>
        </div>
        <Rock:Zone Name="Section A" runat="server"/>
        <Rock:Zone Name="Section B" runat="server"/>
        <Rock:Zone Name="Section C" runat="server"/>
        <Rock:Zone Name="Section D" runat="server"/>
    </div>
</asp:Content>

