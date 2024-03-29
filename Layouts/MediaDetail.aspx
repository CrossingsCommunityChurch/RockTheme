<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
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
        <div class="container main">
            <Rock:Zone Name="Main" runat="server"/>
        </div>
        <Rock:Zone Name="Section A" runat="server"/>
        <Rock:Zone Name="Section B" runat="server"/>
        <Rock:Zone Name="Section C" runat="server"/>
        <Rock:Zone Name="Section D" runat="server"/>
    </div>
</asp:Content>