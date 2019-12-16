import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/paper-button/paper-button.js";import{ReportsSummaryBase}from"../../../../elements/base/reports-summary.js";class ReportsSummary extends ReportsSummaryBase{renderDefault(){return html`
        <style include="flex-grid">
            .text-center {
                text-align: center;
            }

            .ss {
                width: 49%;
                display: inline-block;
                text-align: left;
            }

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
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}drawChart(){const self=this;google.charts.load("current",{packages:["corechart"]});google.charts.setOnLoadCallback(function(){var data=google.visualization.arrayToDataTable([["Year","Sales","Expenses"],["2004",1e3,400],["2005",1170,460],["2006",660,1120],["2007",1030,540]]),chart=new google.visualization.LineChart(self.shadowRoot.querySelector("#curve_chart"));chart.draw(data,{title:"Prices Chart",curveType:"function",legend:{position:"bottom"}})})}generatePDF(){const self=this;var doc=new jsPDF("p","mm","a3");const printer=new Printer(doc);printer.moveY(5);printer.moveX(60);printer.printText("Bid Details",Printer.BOLD);printer.moveY(20);printer.printText("Bid Name: "+this.bidName,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Opening Date: "+this.bidOpeningDate,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Closing Date: "+this.bidClosingDate,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Opening Price: "+this.bidOpeningPrice,Printer.NORMAL);printer.moveY(20);printer.printText("Bid Closing Price: "+this.bidClosingPrice,Printer.NORMAL);if(this.buyer){printer.moveY(20);printer.printText("Bid Participants ",Printer.BOLD);for(let i=0;i<this.participants.length;i++){const participant=this.participants[i];printer.moveY(10);printer.printText("Participant Name: "+participant.name,Printer.NORMAL);printer.moveY(10);printer.printText("Opening price: "+participant.openingPrice,Printer.NORMAL);printer.moveY(10);printer.printText("Closing price: "+participant.closingPrice,Printer.NORMAL);printer.moveY(10)}printer.moveY(20);printer.printText("Auction Summary",Printer.BOLD);printer.moveY(20);printer.printText("Winning Bid: "+this.bidClosingPrice,Printer.NORMAL);printer.moveY(20);printer.printText("Winning Supplier: "+this.closingBidder,Printer.NORMAL);printer.moveY(20);printer.printText("Saving Amount: "+this._computeSavingAmount(this.bidOpeningPrice,this.bidClosingPrice),Printer.NORMAL);printer.moveY(20);printer.printText("Service Charges: "+this._serviceCharge(this.bidOpeningPrice,this.bidClosingPrice),Printer.NORMAL)}else{printer.moveY(20);printer.printText("Bid Price Changes ",Printer.BOLD);for(let i=0;i<this.priceChanges.length;i++){const participant=this.priceChanges[i];printer.moveY(10);printer.printText("Price: "+participant.price,Printer.NORMAL);printer.moveY(10);printer.printText("Date: "+participant.date,Printer.NORMAL);printer.moveY(10)}}if(!1){doc.autoPrint();var iframe=this.$.iframe;iframe.src=doc.output("dataurlstring")}else{doc.save("report.pdf")}}}customElements.define(ReportsSummary.is,ReportsSummary);