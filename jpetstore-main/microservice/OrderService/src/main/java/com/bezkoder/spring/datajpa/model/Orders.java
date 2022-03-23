package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders
{
    //empty constructor
    public Orders(){}

    public Orders(
      int orderId, 
      String userId, 
      String orderdate,
      String shipAddr1,
      String shipAddr2,
      String shipcity,
      String shipstate,
      String shipzip,
      String shipcountry,
      String billaddr1,
      String billaddr2,
      String billcity,
      String billstate,
      String billzip,
      String billcountry,
      String courier,
      String totalprice,
      String billtofirstname,
      String billtolastname,
      String shiptofirstname,
      String shiptolastname,
      String creditcard,
      String exprdate,
      String cardtype,  
      String locale
      ){
      this.orderId = orderId; 
      this.userId = userId; 
      this.orderdate = orderdate;
      this.shipAddr1 = shipAddr1;
      this.shipAddr2 = shipAddr2;
      this.shipcity = shipcity;
      this.shipstate = shipstate;
      this.shipzip = shipzip;
      this.shipcountry = shipcountry;
      this.billaddr1 = billaddr1;
      this.billaddr2 = billaddr2;
      this.billcity = billcity;
      this.billstate = billstate;
      this.billzip = billzip;
      this.billcountry = billcountry;
      this.courier = courier;
      this.totalprice = totalprice;
      this.billtofirstname = billtofirstname;
      this.billtolastname =  billtolastname;
      this.shiptofirstname = shiptofirstname;
      this.shiptolastname = shiptolastname;
      this.creditcard = creditcard;
      this.exprdate = exprdate;
      this.cardtype = cardtype;  
      this.locale = locale;
    }

    @Id
    @Column(name = "orderid")
    private int orderId;    

    @Column(name = "userid")
    private String userId;

    @Column(name = "orderdate")
    private String orderdate;

    @Column(name = "shipaddr1")
    private String shipAddr1;

    @Column(name = "shipaddr2")
    private String shipAddr2;
    
    @Column(name="shipcity")
    private String shipcity;

    @Column(name="shipstate")
    private String shipstate;

    @Column(name="shipzip")
    private String shipzip;

    @Column(name="shipcountry")
    private String shipcountry;

    @Column(name="billaddr1")
    private String billaddr1;

    @Column(name="billaddr2")
    private String billaddr2;

    @Column(name="billcity")
    private String billcity;


    @Column(name = "billstate")
    private String billstate;

    @Column(name = "billzip")
    private String billzip;

    @Column(name = "billcountry")
    private String billcountry;

    @Column(name = "courier")
    private String courier;

    @Column(name = "totalprice")
    private String totalprice;
    
    @Column(name = "billtofirstname")
    private String billtofirstname;

    @Column(name = "billtolastname")
    private String billtolastname;

    @Column(name = "shiptofirstname")
    private String shiptofirstname;

    @Column(name = "shiptolastname")
    private String shiptolastname;

    @Column(name = "creditcard")
    private String creditcard;

    @Column(name = "exprdate")
    private String exprdate;

    @Column(name = "cardtype")
    private String cardtype;

    @Column(name = "locale")
    private String locale;
    
    public int getOrderId() {
      return orderId;
    }
  
    public void setOrderId(int orderId) {
      this.orderId = orderId;
    }
  
    public String getUserId() {
      return userId;
    }
  
    public void setUserId(String userId) {
      this.userId = userId;
    }
    
    public String getOrderDate() {
      return orderdate;
    }
  
    public void setOrderDate(String orderdate) {
      this.orderdate = orderdate;
    }

    public String getShipAddr1() {
      return shipAddr1;
    }
  
    public void setShipAddr1(String shipAddr1) {
      this.shipAddr1 = shipAddr1;
    }

    public String getShipAddr2() {
      return shipAddr2;
    }
  
    public void setShipAddr2(String shipAddr2) {
      this.shipAddr2 = shipAddr2;
    }

    public String getShipCity(){
      return this.shipcity;
    }

    public void setShipCity(String shipcity){
      this.shipcity=shipcity;
    }

    public String getShipState(){
      return this.shipstate;
    }

    public void setShipState(String shipstate){
      this.shipstate=shipstate;
    }

    public String getShipZip(){
      return this.shipzip;
    }

    public void setShipZip(String shipzip){
      this.shipzip=shipzip;
    }

    public String getShipCountry(){
      return this.shipcountry;
    }

    public void setShipCountry(String shipcountry){
      this.shipcountry=shipcountry;
    }

    public String getBillAddr1(){
      return this.billaddr1;
    }

    public void setBillAddr1(String billaddr1){
      this.billaddr1=billaddr1;
    }

    public String getBillAddr2(){
      return this.billaddr2;
    }

    public void setBillAddr2(String billaddr2){
      this.billaddr2=billaddr2;
    }

    public String getBillCity(){
      return this.billcity;
    }

    public void setBillCity(String billcity){
      this.billcity=billcity;
    }

    public String getBillState() {
      return this.billstate;
    }
  
    public void setBillState(String billstate) {
      this.billstate = billstate;
    }

    public String getBillZip() {
      return billzip;
    }
  
    public void setBillZip(String billzip) {
      this.billzip = billzip;
    }

    public String getBillCountry() {
      return billcountry;
    }
  
    public void setBillCountry(String billcountry) {
      this.billcountry = billcountry;
    }

    public String getCourier() {
      return courier;
    }
  
    public void setCourier(String courier) {
      this.courier = courier;
    }

    public String getTotalPrice() {
      return totalprice;
    }
  
    public void setTotalPrice(String totalprice) {
      this.totalprice = totalprice;
    }

    public String getBilltofirstname() {
      return this.billtofirstname;
    }
  
    public void setBilltofirstname(String billtofirstname) {
      this.billtofirstname = billtofirstname;
    }

    public String getBilltolastname() {
      return billtolastname;
    }
  
    public void setBilltolastname(String billtolastname) {
      this.billtolastname = billtolastname;
    }

    public String getShiptolastname() {
      return shiptolastname;
    }

    public void setShiptolastname(String shiptolastname) {
      this.shiptolastname = shiptolastname;
    }

    public String getShiptofirstname() {
      return this.shiptofirstname;
    }
  
    public void setShiptofirstname(String shiptofirstname) {
      this.shiptofirstname = shiptofirstname;
    }

    public String getCreditCard() {
      return creditcard;
    }

    public void setCreditCard(String creditcard) {
      this.creditcard = creditcard;
    }

    public String getExprDate() {
      return exprdate;
    }

    public void setExprDate(String exprdate) {
      this.exprdate = exprdate;
    }

    public String getCardType() {
      return cardtype;
    }

    public void setCardType(String cardtype) {
      this.cardtype = cardtype;
    }

    public String getLocale() {
      return locale;
    }

    public void setLocale(String locale) {
      this.locale = locale;
    }

}