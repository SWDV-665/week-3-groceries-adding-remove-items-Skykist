import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 23
    },
    {
      name: "Banana",
      quantity: 4
    },
    {
      name: "Sugar",
      quantity: 1
    },
    {
      name: "Chocolate",
      quantity: 0
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item -' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    let prompt = this.alertCtrl.create({
      title: "Add item",
      message: "Please enter the name of the item.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data=> {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]

    });
    prompt.present();
  }

}
