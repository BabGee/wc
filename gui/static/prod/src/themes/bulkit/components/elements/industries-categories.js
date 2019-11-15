import{html,SharedStyles,IndustriesCategoriesBase}from"../../../../components/adaptive-ui.js";class IndustriesCategories extends IndustriesCategoriesBase{renderDefault(){return html`
        ${SharedStyles}
        <style>
            [hidden] {
                display: none;
            }

            .dropdown {
                margin-left: 36px;
            }

            .content-wrapper {

                width: 41.66667%;
                margin-left: 33.33333%;
                padding-bottom: 10px;
                display:grid;

            }

            // @media screen and (max-width: 1400px) {

            //     .content-wrapper {

            //         // min-width: 60%;
            //         margin: auto;
            //     }

            // }

            // @media screen and (max-width: 1200px) {

            //     .content-wrapper {

            //         // min-width: 60%;
            //         margin: auto;
            //     }

            // }

            // @media screen and (max-width: 850px) {

            //     .content-wrapper {

            //         // min-width: 80%;
            //         margin: auto;
            //     }

            // }

            // @media screen and (max-width: 750px) {

            //     .content-wrapper {

            //         // min-width: 90%;
            //         margin: auto;

            //     }

            // }

            // @media screen and (max-width: 580px) {

            //     .content-wrapper {

            //         // min-width: 100%;
            //         margin: auto;
            //     }

            // }

            input {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            iron-icon, div[suffix] {
                color: hsl(0, 0%, 50%);
                margin-right: 12px;
            }

            paper-item {
                font-size: 12px;
                color: #54667a;
                background: white;
            }


        </style>

        
        <div class="content">
        <div class="content-wrapper">
                    <!-- Industry Section  -->
                    <paper-dropdown-menu
                            id="industry-section"
                            label="Industry Section">

                        <paper-card horizontal-align="center"
                                    slot="dropdown-content"
                                    style="width: 100%">

                            <paper-listbox
                                    attr-for-selection="pk"
                                    @iron-select="${this._onSectionSelected}">
                                    ${this._computeSections(this.rows,this.q).map(data=>html`
                                        <paper-item .pk="${data[0]}" .next="${data[3]}" >${data[1]} - ${data[2]}</paper-item>
                                    `)}
                            </paper-listbox>
                        </paper-card>
                    </paper-dropdown-menu>
                    <small class="info-error" style="display: none;"> Error </small>


                    <!-- Industry Division  -->
                    <paper-dropdown-menu
                            id="industry-division"
                            label="Industry Division">

                        <paper-card horizontal-align="center"
                                    slot="dropdown-content"
                                    style="width: 100%">

                            <paper-listbox
                                    attr-for-selection="pk"
                                    @iron-select="${this._onDivisionSelected}">
                                    ${this._computeDivisions(this.rows,this.industrySection,this.q).map(data=>html`
                                        <paper-item .pk="${data[0]}" .next="${data[3]}">${data[1]} - ${data[2]}</paper-item>
                                    `)}
                            </paper-listbox>
                        </paper-card>
                    </paper-dropdown-menu>
                    <small class="info-error" style="display: none;"> Error </small>
                    <!-- Industry Division  -->
                    <paper-dropdown-menu
                            id="industry-group"
                            label="Industry Group">

                        <paper-card horizontal-align="center"
                                    slot="dropdown-content"
                                    style="width: 100%">

                            <paper-listbox
                                    attr-for-selection="pk"
                                    @iron-select="${this._onGroupSelected}">
                                    ${this._computeGroups(this.rows,this.industrySection,this.industryDivision,this.q).map(data=>html`
                                        <paper-item .pk="${data[0]}" .next="${data[3]}">${data[2]}</paper-item>
                                    `)}
                            </paper-listbox>
                        </paper-card>
                    </paper-dropdown-menu>
                    <small class="info-error" style="display: none"> Error </small>

                    <!-- Industry Division  -->
                    <paper-dropdown-menu
                            id="industry-class"
                            label="Industry Class">

                        <paper-card horizontal-align="center"
                                    slot="dropdown-content"
                                    style="width: 100%">

                            <paper-listbox
                                    attr-for-selection="pk">
                                    ${this._computeClasses(this.rows,this.industrySection,this.industryDivision,this.industryGroup,this.q).map(data=>html`
                                    <paper-item .pk="${data[0]}" .next="${data[3]}">${data[2]}</paper-item>
                                    `)}

                            </paper-listbox>
                        </paper-card>
                    </paper-dropdown-menu>
                    <small class="info-error" style="display: none;"> Error </small>
            </div>
            

        </div>`}getValue(){const industrySection=this.qs("#industry-class").selectedItem;if(industrySection){return industrySection.pk}}valid(){this.shadowRoot.querySelector(".info-error").style.display="none";this.shadowRoot.querySelector(".info-error").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".info-error").style.display="block";if(validation){this.shadowRoot.querySelector(".info-error").textContent=validation}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_onSectionSelected(e){this.industrySection=e.detail.item.pk}_onDivisionSelected(e){this.industryDivision=e.detail.item.pk}_onGroupSelected(e){this.industryGroup=e.detail.item.pk}_computeSections(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}if(10<filtered_items.length){break}}return filtered_items}_computeDivisions(data,iS,q){if(!iS)return[];const industrySection=this.qs("#industry-section").selectedItem;if(!industrySection)return;const rows=industrySection.next,filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}if(10<filtered_items.length){break}}return filtered_items}_computeGroups(data,iS,iD,q){if(!iD)return[];const industrySection=this.qs("#industry-division").selectedItem;if(!industrySection)return;const rows=industrySection.next,filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}if(10<filtered_items.length){break}}return filtered_items}_computeClasses(data,iS,iD,iG,q){if(!iG)return[];const industrySection=this.qs("#industry-group").selectedItem;if(!industrySection)return;const rows=industrySection.next,filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}if(10<filtered_items.length){break}}return filtered_items}init(pElement,loader){super.init(pElement,loader)}}customElements.define(IndustriesCategories.is,IndustriesCategories);