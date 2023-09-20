<template>
    <form-card title="CONTRACT DETAILS FORM">

        <div class="c-cont property-details">
            <header>PROPERTY DETAILS</header>
            <article>
                <section class="section1">
                    <div>
                        <span>
                            <input type="checkbox">
                            <label>Northtown</label>
                        </span>
                        <span>
                            <input type="checkbox">
                            <label>Northcrest</label>
                        </span>
                        <span>
                            <input type="checkbox">
                            <label>Woodlane Residence</label>
                        </span>
                        <span>
                            <input type="checkbox">
                            <label>Fernwood</label>
                        </span>
                        <span>
                            <input type="checkbox">
                            <label>Eden Ridge</label>
                        </span>
                        <span>
                            <input type="checkbox">
                            <label>Others</label>
                            <input style="width: calc(100%/3); border: none; border-bottom: 1px solid black;">
                        </span>                       
                    </div>  
                </section>

                <section class="section2">
                    <p>Tye of Buyer</p>
                    <div><input type="checkbox"><label>Individual</label></div>
                    <div><input type="checkbox"><label>Corporate</label></div>
                </section>
            </article>
        </div>

        <div class="c-cont contact-details">
            <header>CONTACT DETAILS - PRINCIPAL BUYER</header>
            <article>

                <section class="section1">
                    <div class="section1-left">
                            <p>CONTRACT NAME (Individual Buyer)</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input>
                        <br>
                    </div>
                    
                </section>

                <section class="section2">
                    <div class="div1">
                        <p>PRIMARY/MAILING ADDRESS</p>
                        <input style="width:100%;">
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Civil Status</p>
                        <div class="status">
                            <section><input type="checkbox">Single</section>
                            <section><input type="checkbox">Widow/er</section>
                            <section><input type="checkbox">Married</section>
                            <section><input type="checkbox">Separated</section>
                        </div>
                    </div>
                    <div class="div3">
                        <p>Age</p>
                        <input style="display: block;">
                    </div>
                </section>

                <section class="section3">
                    <div class="div1">
                        <p>SECONDARY ADDRESS</p>
                        <input style="width:100%;">
                        <br>
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Civil Status</p>
                        <div class="status">
                            <section><input type="checkbox">Male</section>
                            <section><input type="checkbox">Female</section>  
                        </div>
                    </div>
                    <div class="div3">
                        <p>Birthdate</p>
                        <input style="display: block;" type="date">
                        <p>Place of Birth</p>
                        <input style="border: none; border-bottom: 1px solid black;">
                    </div>
                </section>

                <section class="section4">
                    <div class="div1">
                        <section>
                            <div>
                                <p>HOME PHONE NO.</p>
                                <input>
                            </div>
                            <div>
                                <p>FAX NO.</p>
                                <input>
                            </div>
                        </section>
                    
                        <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                        <input type="text" style="display: block;">
                    </div>

                    <div class="div2">
                        <section>
                            <p>MOBILE NO.</p>
                            <input>
                        </section>
                        <section>
                            <p>EMAIL ADDRESS.</p>
                            <input style="display: block;">
                        </section>
                    </div>

                    <div class="div3">
                        <section>
                            <p>T.I.N.</p>
                            <input>
                        </section>
                        <section>
                            <p>CITIZENSHIP.</p>
                            <input>
                        </section>
                    </div>

                    <div class="div4">
                        <p>RELIGION</p>    
                        <span><input type="checkbox">Roman Catholic</span>
                        <span><input type="checkbox">Protestant<br></span>
                        <span><input type="checkbox">Others (pl. specify)<br></span>
                        <input>
                    </div>
                </section>

                <section class="section5">
                    <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                    <div>
                        <section>
                            <span><input type="checkbox"> SSS/GSIS</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Driver's License</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> PRC</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Passport</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Others</span>:<input>
                        </section>
                    </div>
                </section>
            </article>
        </div>

        <div class="c-cont business-employment">
            <header>BUSINESS / EMPLOYMENT INFORMATION</header>
                <div class="div1">
                    <section>
                        <p>Company / Business Name</p>
                        <input>
                    </section>
                    <section>
                        <p>Company / Business Address</p>
                        <input>
                    </section>
                </div>

                <div class="div2">
                    <section class="section1">
                        <p>Office / Business Phone No.</p>
                        <input>
                    </section>
                    <section class="section2">
                        <p>Fax No.</p>
                        <input>
                    </section>
                    <section class="section3">
                        <p>Position</p>
                        <input>
                    </section>
                    <section class="section4">
                        <p>Profession</p>
                        <input>
                    </section>
                    <section class="section5">
                        <p>Employment Status</p>
                        <div>
                            <span><input type="checkbox"> Local</span>
                            <span><input type="checkbox"> OFW</span>
                            <span><input type="checkbox"> self-Employed</span>
                        </div>
                    </section>
                </div>
        </div>

        <div class="c-cont spouse">
            <header>SPOUSE'S INFORMATION</header>

            <div class="div1">
                    <div class="section1-left">
                            <p>NAME OF SPOUSE</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input>
                         <br>
                    </div>
            </div>

            <div class="div2">
                <section>
                    <p>HOME PHONE NO.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>MOBILE NO.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>EMAIL ADDRESS</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>T.I.N.</p>
                    <input style="display: block;">
                </section>
                <section>
                    <p>CITIZENSHIP</p>
                    <input style="display: block;">
                </section>
            </div>

            <div class="div3">
                <section class="section1">
                    <p>FAX NO.</p>
                    <input>
                </section>

                <section class="section2">
                    Sex
                    <div>
                        <span><input type="checkbox">Male</span>
                        <span><input type="checkbox">Male</span>
                    </div>
                </section>

                <section class="section3">
                    <p>Employment Status</p>
                    <div>
                        <span><input type="checkbox">Local</span>
                        <span><input type="checkbox">Self-Employed</span>
                        <span><input type="checkbox">OFW</span>
                        <span><input type="checkbox">Expatriate</span>
                    </div>
                </section>

                <section class="section4">
                    <p>No. of Children</p>
                    <input>
                </section>
            </div>

        </div>

        <div class="c-cont buyer-spa">
            <header>BUYER WITH A SPECIAL POWER OF A ATTORNEY (SPA)</header>
            <article>

                <section class="section1">
                    <div class="section1-left">
                            <p>CONTRACT NAME (Individual Buyer)</p>
                        <br>
                        <div class="names">
                            <section>
                                <input type="text">
                                <p>Last Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>First Name</p>
                            </section>
                            <section>
                                <input type="text">
                                <p>Middle Name</p>
                            </section>
                        </div>
                    </div>

                    <div class="section1-right">
                        <p>Occupation / Profession</p>
                        <br>
                        <input>
                        <br>
                    </div>
                    
                </section>

                <section class="section2">
                    <div class="div1">
                        <p>PRIMARY/MAILING ADDRESS</p>
                        <input style="width:100%;">
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Civil Status</p>
                        <div class="status">
                            <section><input type="checkbox">Single</section>
                            <section><input type="checkbox">Widow/er</section>
                            <section><input type="checkbox">Married</section>
                            <section><input type="checkbox">Separated</section>
                        </div>
                    </div>
                    <div class="div3">
                        <p>Age</p>
                        <input style="display: block;">
                    </div>
                </section>

                <section class="section3">
                    <div class="div1">
                        <p>SECONDARY ADDRESS</p>
                        <input style="width:100%;">
                        <br>
                        <p>Zip Code: <input style="width:100%;"></p>
                    </div>
                    <div class="div2">
                        <p>Sex</p>
                        <div class="status">
                            <section><input type="checkbox">Male</section>
                            <section><input type="checkbox">Female</section>  
                        </div>
                    </div>
                    <div class="div3">
                        <p>Birthdate</p>
                        <input style="display: block;" type="date">
                        <p>Place of Birth</p>
                        <input style="border: none; border-bottom: 1px solid black;">
                    </div>
                </section>

                <section class="section4">
                    <div class="div1">
                        <section>
                            <div>
                                <p>HOME PHONE NO.</p>
                                <input>
                            </div>
                            <div>
                                <p>FAX NO.</p>
                                <input>
                            </div>
                        </section>
                    
                        <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                        <input type="text" style="display: block;">
                    </div>

                    <div class="div2">
                        <div class="div">
                            <section>
                                <p>MOBILE NO.</p>
                                <input>
                            </section>
                            <section>
                                <p>T.I.N.</p>
                                <input>
                            </section>
                        </div>
                        <section class="section">
                            <p>EMAIL ADDRESS.</p>
                            <input style="display: block;">
                        </section>
                    </div>

                    <div class="div3">
                        <section>
                            <p>CITIZENSHIP.</p>
                            <input>
                        </section>
                    </div>
                </section>

                <section class="section5">
                    <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                    <div>
                        <section>
                            <span><input type="checkbox"> SSS/GSIS</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Driver's License</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> PRC</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Passport</span>:<input>
                        </section>
                        <section>
                            <span><input type="checkbox"> Others</span>:<input>
                        </section>
                    </div>
                </section>

            </article>
        </div>

        <div class="c-cont corporate">
            <header>CORPORATE BUYER</header>

            <article class="article1">
                <section class="section1">
                    <p>Name of Corporation</p>
                    <input>
                </section>
                <section class="section2">
                    <p>Name of Business</p>
                    <input>
                </section>
            </article>

            <article class="article2">
                <div class="section1">
                    <p>BUSINESS ADDRESS</p>
                    <input style="width:100%;">
                    <p>Zip Code: <input style="width:100%;"></p>
                </div>

                <div class="section2">
                    <p>BUSINESS PHONE NO.</p>
                    <input>
                </div>
                <div class="section3">
                    <p>FAX NO.</p>
                    <input>
                </div>
            </article>

            <article class="article3">
                <div class="section1-left">
                        <p>NAME OF AUTHORIZED SIGNATORY</p>
                    <br>
                    <div class="names">
                        <section>
                            <input type="text">
                            <p>Last Name</p>
                        </section>
                        <section>
                            <input type="text">
                            <p>First Name</p>
                        </section>
                        <section>
                            <input type="text">
                            <p>Middle Name</p>
                        </section>
                    </div>
                </div>

                <div class="section1-right">
                    <p>DESIGNATION / POSITION</p>
                    <br>
                    <input>
                    <br>
                </div>
            </article>

            <article class="article4">
                <div class="div1">
                    <p>SECONDARY ADDRESS</p>
                    <input style="width:100%;">
                    <br>
                    <p>Zip Code: <input style="width:100%;"></p>
                </div>
                <div class="div2">
                    <p>Sex</p>
                    <div class="status">
                        <section><input type="checkbox">Male</section>
                        <section><input type="checkbox">Female</section>  
                    </div>
                </div>
                <div class="div3">
                    <p>Birthdate</p>
                    <input style="display: block;" type="date">
                    <p>Place of Birth</p>
                    <input style="border: none; border-bottom: 1px solid black;">
                </div>
            </article>

            <article class="article5">
                <div class="div1">
                    <section>
                        <div>
                            <p>HOME PHONE NO.</p>
                            <input>
                        </div>
                        <div>
                            <p>FAX NO.</p>
                            <input>
                        </div>
                    </section>
                    
                    <p style="font-size: clamp(.5rem, 1vw, 1rem);">(please incluse country and area codes, if possible)</p>
                    <input type="text" style="display: block;">
                </div>

                <div class="div2">
                    <div class="div">
                        <section>
                            <p>MOBILE NO.</p>
                            <input>
                        </section>
                        <section>
                            <p>T.I.N.</p>
                            <input>
                        </section>
                    </div>
                    <section class="section">
                        <p>EMAIL ADDRESS.</p>
                        <input style="display: block;">
                    </section>
                </div>

                <div class="div3">
                    <section class="section1">
                        <p>CITIZENSHIP.</p>
                        <input>
                    </section>
                    <section class="section2">
                        <p>Civil Status</p>
                        <section>
                            <span><input type="checkbox">Single</span>
                            <span><input type="checkbox">Widow/er</span>
                            <span><input type="checkbox">Married</span>
                            <span><input type="checkbox">Separated</span>
                        </section>
                    </section>
                </div>
            </article>

            <article class="article6">
                <p>ANY GOVERNEMNT ISSUED I.D. (<span style="font-style: oblique;">please check one</span>)</p>
                <div>
                    <section>
                        <span><input type="checkbox"> SSS/GSIS</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Driver's License</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> PRC</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Passport</span>:<input>
                    </section>
                    <section>
                        <span><input type="checkbox"> Others</span>:<input>
                    </section>
                </div>
            </article>
        </div>

        <div class="c-cont others">
            <header>OTHERS</header>

            <div class="div1">
                <section class="section1">
                    <p>Bank Refererence</p>
                    <div>
                        <section>
                            <p>Banks</p>
                            <textarea></textarea>
                        </section>
                        <section>
                            <p>Type of Account</p>
                            <textarea></textarea>
                        </section>
                    </div>
                </section>
                
                <section class="section2">
                    <p>Reason for the Purchase (check all, if applicable)</p>
                    <div class="checkboxes">
                        <span><input type="checkbox">Investment</span>
                        <span><input type="checkbox">For children</span>
                        <span><input type="checkbox">New Home</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                    <p>What are the factors that you had considred in buying Alsons Properties?</p>
                    <div class="checkboxes">
                        <span><input type="checkbox">Reliability</span>
                        <span><input type="checkbox">Prestige</span>
                        <span><input type="checkbox">Unique Concept Development</span>
                        <span><input type="checkbox">Trustworthiness</span>
                        <span><input type="checkbox">Attractive Payment Terms</span>
                        <span><input type="checkbox">Value-for-Money</span>
                        <span><input type="checkbox">Integrity</span>
                        <span><input type="checkbox">Service</span>
                        <span><input type="checkbox">Location</span>
                        <span><input type="checkbox">Others<input class="text"></span>
                    </div>
                </section>
            </div>

            <div class="div2">
                <p>FROM WHERE HAVE YOU HEARD OF OUR DEVELOPMENT</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Advertisement</span>
                    <span><input type="checkbox">Newspaper write-up</span>
                    <span><input type="checkbox">Sales Exhibit</span>
                    <span><input type="checkbox">A friend referred it to you</span>
                    <span><input type="checkbox">An Agent approached you</span>
                    <span><input type="checkbox">Others<input class="text"></span>
                </div>
            </div>

            <div class="div3">
                <p>HAVE YOU PURCHASED A LOT FROM ALSONS PROPERTIES BEFORE? <span><input type="checkbox">Yes</span> <span><input type="checkbox">No</span></p> 
                <p>If yes, please state project:</p>
                <div class="checkboxes">
                    <span><input type="checkbox">Ladislawa Garden Village</span>
                    <span><input type="checkbox">Las Terrazas</span>
                    <span><input type="checkbox">Fernwood</span>
                    <span><input type="checkbox">Woodridge Park</span>
                    <span><input type="checkbox">Northcrest</span>
                    <span><input type="checkbox">Others<i>(pls. specify)</i><input class="text"></span>
                </div>
            </div>
        </div>


        <div class="remarks">
            <p>SPECIAL INSTRUCTIONS/ REMARKS (Please specify:)</p>
            <textarea></textarea>
        </div>

        <div class="signature">
            <div>
                <section>
                    <input>
                    <p>Signature of buyer(s)</p>
                </section>   
                <section>
                    <input type="date">
                    <p>Date)</p>
                </section>            
            </div>
            
        </div>

    </form-card>
</template>


<style scoped>
*{
    font-size: clamp(.6rem, 1.2vw, 2rem);
}
.c-cont header{
    padding: .2rem 0;
    text-align: center;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    background-color: #CFD7EC;
    color: #3D73A9;
    font-weight: 700;

}

/*PROPERTY DETAILS */
.property-details article{
    display: flex;
    border: 1px solid black;
    border-bottom: none;
}
.property-details article .section1 {
    border-right: 1px solid black;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.property-details article .section2 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    gap: .5rem;
}
.property-details article .section1 div{
    padding-left: 1rem;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
}
.property-details article .section2  div{
    padding-left: 1rem;
    gap: 3px;
    display: flex;
    align-items: center;
}
.property-details article .section1 div span{
    display: flex;
    align-items: center;
    gap: 3px;
}
@media screen and (max-width: 655px) {
    .property-details article .section2{
        width: 35%;

    }
    .property-details article .section2  div{
    padding-left: .5rem;
    gap: 3px;
    display: flex;
    align-items: center;
}
}
@media screen and (max-width: 320px) {
    .property-details article .section1 div{
        padding-left: .5rem;
    }
}


/*CONTACT DETAILS: section1*/
.contact-details article .section1{
    /* display: flex; */
    border: 1px solid black;
    display: grid;
    grid-template-columns: 70% 30%;
}
.contact-details article .section1 input{
    border: none;
    border-bottom: 1px solid black;
}
.contact-details article .section1 .section1-left{
    box-sizing: border-box;
    /* width: 70%; */
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.contact-details article .section1  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.contact-details article .section1  .section1-right{
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .contact-details article .section1{
    grid-template-columns: 50% 50%;
    }
    .contact-details article .section1 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .contact-details article .section1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .contact-details article .section1  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .contact-details article .section1  .section1-left .names section input{
        width: 100%;
    }
    .contact-details article .section1 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}


/*CONTACT DETAILS: section2*/
.contact-details article .section2 {
    display: grid;
    grid-template-columns:60% 30% 10%;
    border: 1px solid black;
    border-top: none;
}
.contact-details article .section2  .div1{
    border-right: 1px solid black;
    /* width: 60%; */
    padding:  1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.contact-details article .section2  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.contact-details article .section2  .div2{
    border-right: 1px solid black;
    /* width: 30%; */
    padding: 1rem;
}
.contact-details article .section2  .div2 .status{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 80%;
    margin: auto;
}
.contact-details article .section2  .div2 .status section{
    min-width: 60px;
    display: flex;
    align-items: center;
    gap: .5rem;
    min-width: 70px;
}
.contact-details article .section2 .div3{
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.contact-details article .section2 .div3 input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
@media screen and (max-width: 749px) {
    .contact-details article .section2  .div2 .status{
    justify-content: center;
    } 
    .contact-details article .section2  .div1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .contact-details article .section2 .div3{
    text-align: center;
    padding: 1rem .5rem;
    }
    .contact-details article .section2 {
    grid-template-columns:50% 35% 15%;
    }
}


/*CONTACT DETAILS: section3*/
.contact-details article .section3 {
    display: grid;
    grid-template-columns: 60% 15% 25%;
    border: 1px solid black;
    border-top: none;
}
.contact-details article .section3  .div1{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.contact-details article .section3  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.contact-details article .section3 .div2{
    border-right: 1px solid black;
    padding: 1rem;
}
.contact-details article .section3  .div2 .status{
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: .3rem;
}
.contact-details article .section3  .div2 .status section{
    /* border: 1px solid black; */
    min-width: 60px;
    display: flex;
    align-items: center;
}
.contact-details article .section3 .div3{
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
}
@media screen and (max-width: 749px){
    .contact-details article .section3 {
    grid-template-columns: 50% 15% 35%;
    }
}
@media screen and (max-width: 555px){
    .contact-details article .section3 {
        grid-template-columns: 50% 50%;
    }
    .contact-details article .section3 .div2{
        border-right: none;
    }
    .contact-details article .section3 .div3{
        border-right: 1px solid black;
    }
}


/*CONTACT DETAILS: section4*/
.contact-details article .section4{
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 40% 20% 18% 22%;
}
.contact-details article .section4 .div1{
    border:  1px solid black;
    border-top: none;
    border-bottom: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.contact-details article .section4 .div1 section{
    display: flex;
    gap: .2rem;
    /* height: 50%; */
}
.contact-details article .section4 .div1 section div{
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
}
.contact-details article .section4 .div1 input{
    width: 100%;
}
.contact-details article .section4 .div2{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .5rem;
}
.contact-details article .section4 .div2 section{
    /* height: 50%; */
    display: flex;
    flex-direction: column;
}
.contact-details article .section4 .div3{
    border-right: 1px solid black;
    padding: 1rem;
}
.contact-details article .section4 .div3 section{
    height: 50%;
    display: flex;
    flex-direction: column;
}
.contact-details article .section4 .div4{
    padding: 1rem;
    border-right: 1px solid black;
    /* width: 20%; */
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 703px){
    .contact-details article .section4{
    grid-template-columns: 50% 50%;
    }
    .contact-details article .section4 .div1{
    border-bottom:  1px solid black;
    }
    .contact-details article .section4 .div2{
    border-bottom:  1px solid black;
    }
    .contact-details article .section4 .div3{
    border-left:  1px solid black;
    }
}
@media screen and (max-width: 505px) {
    .contact-details article .section4 .div1 section{
    display: flex;
    flex-direction: column;
    }
    .contact-details article .section4 .div1 section div{
    width: 100%;
    }
}


/*CONTACT DETAILS: section5*/
.contact-details article .section5{
    padding: 1rem;
    border: 1px solid black;
    border-bottom: none;
}
.contact-details article .section5 div{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}
.contact-details article .section5 div section{ 
    margin: .1rem .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
}
.contact-details article .section5 div span{ 
    /* border: 1px solid black; */
    min-width: 60px;
    width: 10vw;
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 3px;
}


/*BUSINESS-PROPERTY-INFORMATION*/
.business-employment .div1{
    display: flex;
}
.business-employment .div1 section{
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid black;
    border-bottom: none;
}
.business-employment .div1 :nth-child(1){
    border-right: none;
}
.business-employment .div2{
    border: 1px solid black;
    border-bottom: none;
    display: grid;
    grid-template-columns: 50% 50%;
}
.business-employment .div2 section{
    box-sizing: border-box;
    display: flex;    
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid black;
}
.business-employment .div2 .section1{
    border-right: 1px solid black;
}
.business-employment .div2 .section3{
    border-right: 1px solid black;
}
.business-employment .div2 .section5{
    border-right: 1px solid black;
    border-bottom: none;
}
.business-employment .div2 section div{
    display: flex;
    column-gap: 1rem;
    flex-flow: wrap;
}
.business-employment .div2 section div span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}


/*SPOUSE-INFORMATION : .div1*/
.spouse .div1{
    border: 1px solid black;
    display: grid;
    grid-template-columns: 70% 30%;
}
.spouse .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.spouse .div1 .section1-left{
    box-sizing: border-box;
    /* width: 70%; */
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.spouse .div1  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.spouse  .div1  .section1-right{
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .spouse .div1{
        border: 1px solid black;
        grid-template-columns: 50% 50%;
    }
    .spouse  .div1 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .spouse  .div1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .spouse  .div1  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .spouse  .div1  .section1-left .names section input{
        width: 100%;
    }
    .spouse .div1 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}

/*SPOUSE-INFORMATION : .div2*/
.spouse .div2 {
    display: grid;
    grid-template-columns: 25% calc(75%/4) calc(75%/4) calc(75%/4) calc(75%/4);
}
.spouse .div2 section{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}
@media screen and (max-width: 703px) {
.spouse .div2 {
    grid-template-columns: 25%  25% 25% 25%;
    }
}
@media screen and (max-width: 576px) {
.spouse .div2 {
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
}
@media screen and (max-width: 441px) {
.spouse .div2 {
    grid-template-columns: 50% 50%;
    }
}

/*SPOUSE-INFORMATION : .div3*/
.spouse .div3{
    display: grid;
    grid-template-columns: 25% 20% 30% 25% ;
}
.spouse .div3 section{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.spouse .div3 .section2 div{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.spouse .div3 .section2 div span{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
.spouse .div3 .section3 div{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    align-items: center;
}
.spouse .div3 .section3 div span{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 576px) {
.spouse .div3{
    display: grid;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    }
}
@media screen and (max-width: 441px) {
.spouse .div3 {
    grid-template-columns: 50% 50%;
    }
}

/*BUYER WITH SPA*/
/*BUYER-SPA: section1*/
.buyer-spa article .section1{
    display: grid;
    grid-template-columns: 70% 30%;
    border: 1px solid black;
}
.buyer-spa article .section1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section1 .section1-left{
    box-sizing: border-box;
    /* width: 70%; */
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.buyer-spa article .section1  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.buyer-spa article .section1  .section1-right{
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .buyer-spa article .section1{
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid black;
    }
    .buyer-spa article .section1 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .buyer-spa article .section1  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .buyer-spa article .section1  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .buyer-spa article .section1  .section1-left .names section input{
        width: 100%;
    }
    .buyer-spa article .section1 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}

/*BUYER-SPA: section2*/
.buyer-spa article .section2 {
    display: grid;
    grid-template-columns:60% 30% 10%;
    border: 1px solid black;
    border-top: none;
}
.buyer-spa article .section2  .div1{
    border-right: 1px solid black;
    /* width: 60%; */
    padding:  1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.buyer-spa article .section2  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section2  .div2{
    border-right: 1px solid black;
    /* width: 30%; */
    padding: 1rem;
}
.cbuyer-spa article .section2  .div2 .status{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 80%;
    margin: auto;
}
.buyer-spa article .section2  .div2 .status section{
    min-width: 60px;
    display: flex;
    align-items: center;
    gap: .5rem;
    min-width: 70px;
}
.buyer-spa article .section2 .div3{
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.buyer-spa article .section2 .div3 input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
@media screen and (max-width: 749px) {
    .buyer-spa article .section2  .div2 .status{
    justify-content: center;
    } 
    .buyer-spa article .section2  .div1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .buyer-spa article .section2 .div3{
    text-align: center;
    padding: 1rem .5rem;
    }
    .buyer-spa article .section2 {
    grid-template-columns:50% 35% 15%;
    }
}

/*BUYER-SPA: section3*/
.buyer-spa article .section3 {
    display: grid;
    grid-template-columns: 60% 15% 25%;
    border: 1px solid black;
    border-top: none;
}
.buyer-spa article .section3  .div1{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.buyer-spa article .section3  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.buyer-spa article .section3 .div2{
    border-right: 1px solid black;
    padding: 1rem;
}
.buyer-spa article .section3  .div2 .status{
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: .3rem;
}
.buyer-spa article .section3  .div2 .status section{
    /* border: 1px solid black; */
    min-width: 60px;
    display: flex;
    align-items: center;
}
.buyer-spa article .section3 .div3{
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
}
@media screen and (max-width: 749px){
    .buyer-spa article .section3 {
    grid-template-columns: 50% 15% 35%;
    }
}
@media screen and (max-width: 555px){
    .buyer-spa article .section3 {
        grid-template-columns: 50% 50%;
    }
    .buyer-spa article .section3 .div2{
        border-right: none;
    }
    .buyer-spa article .section3 .div3{
        border-right: 1px solid black;
    }
}

/*BUYER-SPA: section4*/
.buyer-spa article .section4{
    display: grid;
    grid-template-columns: 40% 40% 20% ;
}
.buyer-spa article .section4 .div1{
    border:  1px solid black;
    border-top: none;
    border-bottom: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.buyer-spa article .section4 .div1 section{
    display: flex;
    gap: .2rem;
    height: 50%;
}
.buyer-spa article .section4 .div1 section div{
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
}
.buyer-spa article .section4 .div1 input{
    width: 100%;
}
.buyer-spa article .section4 .div2{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .5rem;
}
.buyer-spa article .section4 .div2 .div{
    /* height: 50%; */
    display: flex;
    /* flex-direction: column; */
    gap: .5rem;   
}
.buyer-spa article .section4 .div2 .div section{
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 1px solid black; */
}
.buyer-spa article .section4 .div2 .section{
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}
.buyer-spa article .section4 .div3{
    border-right: 1px solid black;
    padding: 1rem;
    min-height: 80px;
}
.buyer-spa article .section4 .div3 section{
    height: 50%;
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 703px){
    .buyer-spa article .section4{
    grid-template-columns: 50% 50%;
    }
    .buyer-spa article .section4 .div1{
    border-bottom:  1px solid black;
    }
    .buyer-spa article .section4 .div2{
    border-bottom:  1px solid black;
    flex-direction: column;
    }
    .buyer-spa article .section4 .div2 .div{
    flex-direction: column;
    }
    .buyer-spa article .section4 .div2 .div section{
    width: 100%;
    }
    .buyer-spa article .section4 .div3{
    border-left:  1px solid black;
    }
}
@media screen and (max-width: 505px) {
    .buyer-spa article .section4 .div1 section{
    display: flex;
    flex-direction: column;
    }
    .buyer-spa article .section4 .div1 section div{
    width: 100%;
    }
}

/*BUYER-SPA: section5*/
.buyer-spa article .section5{
    padding: 1rem;
    border: 1px solid black;
    border-bottom: none;
}
.buyer-spa article .section5 div{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}
.buyer-spa article .section5 div section{ 
    margin: .1rem .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
}
.buyer-spa article .section5 div span{ 
    /* border: 1px solid black; */
    min-width: 60px;
    width: 10vw;
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 3px;
}


/*CORPORATE*/
.corporate article{
    display: flex;
}

/*CORPORATE: article1*/
.corporate .article1 section{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}
.corporate .article1 .section1{
    width: 50%;
    border-right: none;
}
.corporate .article1 .section2{
    flex-grow: 1;
}
.corporate .article1 section input{
    width: 100%;
}

/*CORPORATE: article2*/
.corporate .article2 {
    display: grid;
    grid-template-columns:60% 20% 20%;
    border: 1px solid black;
    border-top: none;
}
.corporate .article2  .section1{
    border-right: 1px solid black;
    /* width: 60%; */
    padding:  1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.corporate .article2  .section1 input{
    border: none;
    border-bottom: 1px solid black;
}
.corporate .article2  .section2{
    border-right: 1px solid black;
    /* width: 30%; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
}
.corporate .article2  .section2 .status{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 80%;
    margin: auto;
}
.corporate .article2  .section2 .status section{
    min-width: 60px;
    display: flex;
    align-items: center;
    gap: .5rem;
    min-width: 70px;
}
.corporate .article2  .section3{
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.corporate .article2  .section3 input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
@media screen and (max-width: 749px) {
    .corporate .article2  .section2 .status{
    justify-content: center;
    } 
    .corporate .article2  .section1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .corporate .article2  .section3{
    text-align: center;
    padding: 1rem .5rem;
    }
    .corporate .article2 {
    grid-template-columns:50% 35% 15%;
    }
}
@media screen and (max-width: 555px){
    .corporate .article2 {
    grid-template-columns:50% 50% ;
    }
    .corporate .article2  .section1{
    border-bottom: 1px solid black;
    }
    .corporate .article2  .section2{
        border-bottom: 1px solid black;
    }
    .corporate .article2  .section3{
        border-right: 1px solid black;
    }
}


/*CORPORATE: article3*/
.corporate .article3{
    /* display: flex; */
    border: 1px solid black;
    display: grid;
    grid-template-columns: 70% 30%;
}
.corporate .article3 input{
    border: none;
    border-bottom: 1px solid black;
}
.corporate .article3 .section1-left{
    box-sizing: border-box;
    /* width: 70%; */
    border-right: 1px solid black;
    padding: 1rem;
    word-wrap: break-word;
}
.corporate .article3  .section1-left .names{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.corporate .article3  .section1-right{
    /* flex-grow: 1; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: center;
}
@media screen and (max-width: 732px) {
    .corporate .article3{
    grid-template-columns: 50% 50%;
    }
    .corporate .article3 .section1-left{
        text-align: center;
        padding: .5rem;
    }
    .corporate .article3  .section1-left .names{
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
    .corporate .article3  .section1-left .names section{
        width: 95%;
        margin-right: 1rem;
        text-align: center;
    }
    .corporate .article3  .section1-left .names section input{
        width: 100%;
    }
    .corporate .article3 .section1-right{
        /* width: 40%; */
        text-align: center;
        padding: .5rem;
    }
}

/*CORPORATE: article4*/
.corporate .article4 {
    display: grid;
    grid-template-columns: 60% 15% 25%;
    border: 1px solid black;
    border-top: none;
}
.corporate .article4  .div1{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.corporate .article4  .div1 input{
    border: none;
    border-bottom: 1px solid black;
}
.corporate .article4 .div2{
    border-right: 1px solid black;
    padding: 1rem;
}
.corporate .article4  .div2 .status{
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: .3rem;
}
.corporate .article4  .div2 .status section{
    /* border: 1px solid black; */
    min-width: 60px;
    display: flex;
    align-items: center;
}
.corporate .article4 .div3{
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
}
@media screen and (max-width: 749px){
    .corporate .article4 {
    grid-template-columns: 50% 15% 35%;
    }
}
@media screen and (max-width: 555px){
    .corporate .article4 {
        grid-template-columns: 50% 50%;
    }
    .corporate .article4 .div2{
        border-right: none;
    }
    .corporate .article4 .div3{
        border-right: 1px solid black;
    }
}

/*CORPORATE: article5*/
.corporate .article5{
    display: grid;
    grid-template-columns: 40% 40% 20% ;
}
.corporate .article5 .div1{
    border:  1px solid black;
    border-top: none;
    border-bottom: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.corporate .article5 .div1 section{
    display: flex;
    gap: .2rem;
    /* height: 50%; */
}
.corporate .article5 .div1 section div{
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
}
.corporate .article5 .div1 input{
    width: 100%;
}
.corporate .article5 .div2{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .5rem;
}
.corporate .article5 .div2 .div{
    /* height: 50%; */
    display: flex;
    /* flex-direction: column; */
    gap: .2rem;   
}
.corporate .article5 .div2 .div section{
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 1px solid black; */
}
.corporate .article5 .div2 .section{
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}
.corporate .article5 .div3{
    border-right: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.corporate .article5 .div3 .section1,
.corporate .article5 .div3 .section2{
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}
.corporate .article5 .div3 .section2 section {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 90%;
    margin: auto;
    /* border: 1px solid black; */
}
.corporate .article5 .div3 .section2 section span{
    display: flex;
    align-items: center;
    gap: 3px;
    min-width: 80px;
}
@media screen and (max-width: 703px){
    .corporate .article5{
    grid-template-columns: 50% 50%;
    }
    .corporate .article5 .div1{
    border-bottom:  1px solid black;
    }
    .corporate .article5 .div2{
    border-bottom:  1px solid black;
    flex-direction: column;
    }
    .corporate .article5 .div2 .div{
    flex-direction: column;
    }
    .corporate .article5 .div2 .div section{
    width: 100%;
    }
    .corporate .article5 .div3{
    border-left:  1px solid black;
    }
    .corporate .article5 .div3 .section2 section {
    column-gap:1rem;
}
}
@media screen and (max-width: 505px) {
    .corporate .article5 .div1 section{
    display: flex;
    flex-direction: column;
    }
    .corporate .article5 .div1 section div{
    width: 100%;
    }
}


/*CORPORATE: article6*/
.article6{
    padding: 1rem;
    border: 1px solid black;
    border-bottom: none;
    display: flex;
    flex-direction: column;
}
.article6 div{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}
.article6 div section{ 
    margin: .1rem .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
}
.article6 div span{ 
    /* border: 1px solid black; */
    min-width: 60px;
    width: 10vw;
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 3px;
}

/*OTHER*/
/*OTHER: div1*/
.others .div1{
    display:grid;
    grid-template-columns: 40% 60%;
}
.others .div1 .section1{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section1 div{
    /* border: 1px solid black; */
    display: flex;
    gap: .5rem;
}
.others .div1 .section1 div section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
}
.others .div1 .section1 div section textarea{
    width: 100%;
    resize: none;
    min-height: 5rem;
}
.others .div1 .section2{
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.others .div1 .section2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div1 .section2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div1 .section2 .checkboxes span .text{
    width: 100%;
}
@media screen and (max-width: 563px) {
    .others .div1{
    grid-template-columns: 50% 50%;
    }    
}
@media screen and (max-width: 530px) {
    .others .div1{
    grid-template-columns: 40% 60%;
    }      
    .others .div1 .section1 div{
    padding-top: .5rem;
    flex-direction: column;
    text-align: center;
    }
    .others .div1 .section2 .checkboxes{
    padding-left: .5rem;
    }
}


/*OTHER: div2*/
.others .div2{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div2 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div2 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
}
.others .div2 .checkboxes span .text{
    width: 100%;
}


/*OTHER: div3*/
.others .div3{
    border: 1px solid black;
    border-top: none;
    padding: 1rem;
}
.others .div3 .checkboxes{
    padding: .5rem 0 .5rem 1rem;
    /* border: 1px solid black; */
    display: flex;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
}
.others .div3 .checkboxes span{
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

/*remarks*/
.remarks{
    padding: 1rem;
    width: 90%;
    margin: auto;
}
.remarks textarea{
    padding: 1rem;
    resize: none;
    min-height: 8rem;
    width: 100%;
}
.signature{
    width: 100%;
    display: flex;
    justify-content: end;
}
.signature div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.signature div section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signature div section input{
    width: 100%;
}
</style>