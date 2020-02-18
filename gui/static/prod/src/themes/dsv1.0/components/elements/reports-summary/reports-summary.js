import{BaseElement,dataSourceMixin,css,html}from"../../../../../components/adaptive-ui.js";class Printer$1{static get BOLD(){return"bold"}static get NORMAL(){return"normal"}constructor(doc){this.doc=doc;this.width=doc.internal.pageSize.width;this.height=doc.internal.pageSize.height;this.x=0;this.y=0}moveY(){this.y+=5}moveX(){this.x+=5}setX(){this.x=20}printText(text,font){this.doc.setFontType(font);this.doc.text(this.x,this.y,text);this.doc.setFontType(Printer$1.NORMAL)}}const ReportsSummaryBase=class extends dataSourceMixin(BaseElement){static get is(){return"reports-summary"}constructor(){super();this.participants=[];this.priceChanges=[]}static get properties(){return{bidName:String,bidOpeningDate:String,bidClosingDate:String,bidOpeningPrice:String,closingBidder:String,bidClosingPrice:String,participants:{type:Array},priceChanges:{type:Array},buyer:Boolean}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{for(let i=0;i<self.groups.length;i++){const groupName=self.groups[i];let group;switch(groupName){case"Bid Details":group=self.data[i][0];self.bidName=group.name;self.bidOpeningDate=group["Opening Date"];self.bidClosingDate=group["Closing Date"];break;case"Bid Opening Price":group=self.data[i][0];self.bidOpeningPrice=group.price;break;case"Bid Closing Price":group=self.data[i][0];self.bidClosingPrice=group.price;self.closingBidder=group.supplier;break;case"Bid Participants":group=self.data[i];const participants=[];for(let j=0;j<group.length;j++){participants.push({name:group[j].institution_name,openingPrice:group[j].opening_price,closingPrice:group[j].closing_price})}self.participants=participants;break;case"Bid Price Changes":group=self.data[i];const priceChanges=[];for(let j=0;j<group.length;j++){priceChanges.push({date:group[j].Date,price:group[j].price})}self.priceChanges=priceChanges;break;}}self.drawChart();self.loading=!1})}drawChart(){const self=this;google.charts.load("current",{packages:["corechart"]});google.charts.setOnLoadCallback(function(){var data=google.visualization.arrayToDataTable([["Year","Sales","Expenses"],["2004",1e3,400],["2005",1170,460],["2006",660,1120],["2007",1030,540]]),chart=new google.visualization.LineChart(self.shadowRoot.querySelector("#curve_chart"));chart.draw(data,{title:"Prices Chart",curveType:"function",legend:{position:"bottom"}})})}_computeSavingAmount(oP,cP){return+oP-+cP}_serviceCharge(oP,cP){return 25*(+oP-+cP)/100}generatePDF(){const self=this;var doc=new jsPDF("p","mm","a3");const printer=new Printer$1(doc);printer.moveY(5);printer.moveX(60);printer.printText("Bid Details",Printer$1.BOLD);printer.moveY(20);printer.printText("Bid Name: "+this.bidName,Printer$1.NORMAL);printer.moveY(20);printer.printText("Bid Opening Date: "+this.bidOpeningDate,Printer$1.NORMAL);printer.moveY(20);printer.printText("Bid Closing Date: "+this.bidClosingDate,Printer$1.NORMAL);printer.moveY(20);printer.printText("Bid Opening Price: "+this.bidOpeningPrice,Printer$1.NORMAL);printer.moveY(20);printer.printText("Bid Closing Price: "+this.bidClosingPrice,Printer$1.NORMAL);if(this.buyer){printer.moveY(20);printer.printText("Bid Participants ",Printer$1.BOLD);for(let i=0;i<this.participants.length;i++){const participant=this.participants[i];printer.moveY(10);printer.printText("Participant Name: "+participant.name,Printer$1.NORMAL);printer.moveY(10);printer.printText("Opening price: "+participant.openingPrice,Printer$1.NORMAL);printer.moveY(10);printer.printText("Closing price: "+participant.closingPrice,Printer$1.NORMAL);printer.moveY(10)}printer.moveY(20);printer.printText("Auction Summary",Printer$1.BOLD);printer.moveY(20);printer.printText("Winning Bid: "+this.bidClosingPrice,Printer$1.NORMAL);printer.moveY(20);printer.printText("Winning Supplier: "+this.closingBidder,Printer$1.NORMAL);printer.moveY(20);printer.printText("Saving Amount: "+this._computeSavingAmount(this.bidOpeningPrice,this.bidClosingPrice),Printer$1.NORMAL);printer.moveY(20);printer.printText("Service Charges: "+this._serviceCharge(this.bidOpeningPrice,this.bidClosingPrice),Printer$1.NORMAL)}else{printer.moveY(20);printer.printText("Bid Price Changes ",Printer$1.BOLD);for(let i=0;i<this.priceChanges.length;i++){const participant=this.priceChanges[i];printer.moveY(10);printer.printText("Price: "+participant.price,Printer$1.NORMAL);printer.moveY(10);printer.printText("Date: "+participant.date,Printer$1.NORMAL);printer.moveY(10)}}if(!1){doc.autoPrint();var iframe=this.$.iframe;iframe.src=doc.output("dataurlstring")}else{doc.save("report.pdf")}}init(pElement,loader){super.init(pElement,loader);const self=this;self.service=pElement.service;self.params=self.pl.paramsCopy();self.buyer="buyer"===pElement.details.report_type;self.loader=this.loadData()}};var reportsSummary={ReportsSummaryBase:ReportsSummaryBase};const ReportsSummaryStyles=css`

.text-center {
    text-align: center;
}

.ss {
    width: 49%;
    display: inline-block;
    text-align: left;
}

`;var reportsSummaryCss={ReportsSummaryStyles:ReportsSummaryStyles};class ReportsSummary extends ReportsSummaryBase{static get styles(){return[ReportsSummaryStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        <style include="flex-grid">
           

        </style>
        
        <!-- Bid Details -->
        <div class="text-center" style="margin-left: 20px;">
            <!--<h5>Bid Details</h5>-->

            <paper-button @click="${this.generatePDF}">Export PDF</paper-button>

            <div class="" style="text-align: left">
                <h3 style="font-weight: initial">
                    <strong>Bid Name</strong> : ${this.bidName}
                </h3>
            </div>
            <div style="margin-top: 5px">
                <!-- Bid Open Close Dates -->

                <div class="ss">
                    <strong style="width: 40%">Bid Opening Date</strong> <span
                        style="width: 60%"> ${this.bidOpeningDate}</span>

                </div>
                <div class="ss">
                    <strong style="width: 40%">Bid Closing Date</strong> <span
                        style="width: 60%">${this.bidClosingDate}</span>
                </div>

                <!-- Bid Open Close Prices -->

                <div class="ss">
                    <strong style="width: 40%">Bid Opening Price</strong> <span
                        style="width: 60%"> ${this.bidOpeningPrice}</span>

                </div>
                <div class="ss">
                    <strong style="width: 40%">Bid Closing Price</strong> <span
                        style="width: 60%">${this.bidClosingPrice}</span>
                </div>
            </div>

            
            ${this.buyer?html`
                <!-- Bid Participants -->
                <h5 style="text-align: left;">Bid Participants</h5>
                <div>
                    <!--
                     CompanyA opening price closing price
                     CompanyB opening price closing price
                     CompanyC opening price closing price
                     -->
                     ${this.participants.map(participant=>html`
                        <div>
                            <!--<div style="width: 2%;display: inline-block;text-align: left;">[[index]]</div>-->
                            <div style="width: 28%;display: inline-block;text-align: left;">${participant.name}</div>

                            <div style="width: 15%;display: inline-block;text-align: left;"><strong>Opening
                                price</strong></div>
                            <div style="width: 19%;display: inline-block;text-align: left;">
                                ${participant.openingPrice}
                            </div>

                            <div style="width: 15%;display: inline-block;text-align: left;"><strong>Closing
                                Price</strong></div>
                            <div style="width: 19%;display: inline-block;text-align: left;">
                                ${participant.closingPrice}
                            </div>

                        </div>
                      `)}
                </div>

                <!-- Auction Summary -->
                <h5 style="text-align: left;">Auction Summary</h5>
                <div style="text-align: left;">
                    <!--
                     Winning Bid
                     Winning Supplier
                     Saving Amount
                     -->
                    <div><strong>Winning Bid</strong>: ${this.bidClosingPrice}</div>
                    <div><strong>Winning Supplier</strong>: ${this.closingBidder}</div>
                    <div><strong>Saving Amount</strong>: ${this._computeSavingAmount(this.bidOpeningPrice,this.bidClosingPrice)}</div>
                    <div><strong>Service Charges</strong>: ${this._serviceCharge(this.bidOpeningPrice,this.bidClosingPrice)}</div>
                </div>
            
            `:html`
            <h5 style="margin-top: 5px;text-align: left;">Your Price Changes</h5>
                ${this.priceChanges.map(priceChange=>html`
                <div>

                        <div style="width: 45%;display: inline-block;text-align: left;">Price: ${priceChange.price}</div>
                        <div style="width: 45%;display: inline-block;text-align: left;">Date: ${priceChange.date}</div>

                    </div>
                
                `)}

            `}
            

            <h5 style="text-align: left;">Chart</h5>
            <!-- Chart -->
            <div id="curve_chart" style="width: 900px; height: 500px"></div>

        </div>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}drawChart(){const self=this;google.charts.load("current",{packages:["corechart"]});google.charts.setOnLoadCallback(function(){var data=google.visualization.arrayToDataTable([["Year","Sales","Expenses"],["2004",1e3,400],["2005",1170,460],["2006",660,1120],["2007",1030,540]]),chart=new google.visualization.LineChart(self.shadowRoot.querySelector("#curve_chart"));chart.draw(data,{title:"Prices Chart",curveType:"function",legend:{position:"bottom"}})})}generatePDF(){const self=this;var doc=new jsPDF("p","mm","a3");const printer=new Printer(doc);printer.moveY(5);printer.moveX(60);printer.printText("Bid Details",Printer.BOLD);printer.moveY(20);printer.printText("Bid Name: "+this.bidName,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Opening Date: "+this.bidOpeningDate,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Closing Date: "+this.bidClosingDate,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Opening Price: "+this.bidOpeningPrice,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Closing Price: "+this.bidClosingPrice,Printer.NORMAL);if(this.buyer){printer.moveY(20);printer.printText("Bid Participants ",Printer.BOLD);for(let i=0;i<this.participants.length;i++){const participant=this.participants[i];printer.moveY(10);printer.printText("Participant Name: "+participant.name,Printer.NORMAL);printer.moveY(10);printer.printText("Opening price: "+participant.openingPrice,Printer.NORMAL);printer.moveY(10);printer.printText("Closing price: "+participant.closingPrice,Printer.NORMAL);printer.moveY(10)}printer.moveY(20);printer.printText("Auction Summary",Printer.BOLD);printer.moveY(20);printer.printText("Winning Bid: "+this.bidClosingPrice,Printer.NORMAL);printer.moveY(20);printer.printText("Winning Supplier: "+this.closingBidder,Printer.NORMAL);printer.moveY(20);printer.printText("Saving Amount: "+this._computeSavingAmount(this.bidOpeningPrice,this.bidClosingPrice),Printer.NORMAL);printer.moveY(20);printer.printText("Service Charges: "+this._serviceCharge(this.bidOpeningPrice,this.bidClosingPrice),Printer.NORMAL)}else{printer.moveY(20);printer.printText("Bid Price Changes ",Printer.BOLD);for(let i=0;i<this.priceChanges.length;i++){const participant=this.priceChanges[i];printer.moveY(10);printer.printText("Price: "+participant.price,Printer.NORMAL);printer.moveY(10);printer.printText("Date: "+participant.date,Printer.NORMAL);printer.moveY(10)}}if(!1){doc.autoPrint();var iframe=this.$.iframe;iframe.src=doc.output("dataurlstring")}else{doc.save("report.pdf")}}}customElements.define(ReportsSummary.is,ReportsSummary);export{reportsSummary as $reportsSummary,reportsSummaryCss as $reportsSummaryCss,ReportsSummaryBase,ReportsSummaryStyles};