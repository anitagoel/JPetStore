package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "orderstatus")
public class OrderStatus {

    // empty constructor
    public OrderStatus(){}

    public OrderStatus(int orderId, int linenum, String status, String timestamp){
      this.orderId = orderId;
      this.linenum = linenum;
      this.status = status;
      this.timestamp = timestamp;
    }
    
    @Id
    @Column(name = "orderid")
    private int orderId;
    
    // @Id
    @Column(name = "linenum")
    private int linenum;

    @Column(name = "status")
    private String status;
    
    @Column(name = "timestamp")
    private String timestamp;
    
    public int getOrderId() {
      return this.orderId;
    }

    public void setOrderId(int orderId) {
      this.orderId = orderId;
    }

    public int getLinenum() {
        return this.linenum;
    }
    
    public void setLinenum(int linenum) {
      this.linenum = linenum;
    }

    public String getTimeStamp() {
      return this.timestamp;
    }
    
    public void setTimeStamp(String timeStamp) {
      this.timestamp = timeStamp;
    }

    public String getStatus() {
      return this.status;
    }
    
    public void setStatus(String status) {
      this.status = status;
    }
}
