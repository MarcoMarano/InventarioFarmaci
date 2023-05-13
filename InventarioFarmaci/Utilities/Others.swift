/**
 Here i will save all global var that i need
 */
import Foundation
import SwiftUI
import UIKit
// start color var section
let backGround_color = Color(red: 163/255, green: 177/255, blue: 138/255)//hex color A3B18A
let oddItem_color = Color(red:1 , green:1 , blue:1) //white
let evenItem_color = Color(red:88/255, green:129/255 , blue:87/255)//hex color 588157
let otherBackground_color = Color(red:218/255, green: 215/255 , blue: 205/255)// hex color DAD7CD
let backGround_color_two = Color(red: 65/255, green: 90/255, blue:50/255) //hex color 3A5A40
let evenItem_color_chiaro = Color(red:92/255, green:153/255 , blue:92/255)
//end color var section

// start path section
let DATA_DIR_PATH = "/InventarioFarmaci/Data/"
let LOG_DIR_PATH = "/InventarioFarmaci/Log/"
let directory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!
let filename = "Items.json"
let fileURL = directory.appendingPathComponent(filename)
// end path section

//Dim
var bounds = UIScreen.main.bounds
var deviceWidth = bounds.size.width
var deviceHeight = bounds.size.height


// convertion date to string
func dateToString(_dateFormat: Date) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "dd/MM/yy"
    return dateFormatter.string(from: _dateFormat)
}

// editPage toggle
var _editPage:Bool = false
func toggleEditPage(){
    print("Before toggle ",_editPage)
    if _editPage{ _editPage = false }
    else{ _editPage = true }
    print("After toggle ",_editPage)
}
//end editPage toggle
