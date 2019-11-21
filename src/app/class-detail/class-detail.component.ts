import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  items: any;
  message: string;
  images: any[];
  safeSrc: SafeResourceUrl;

  constructor(private service: DataService, public sanitizer: DomSanitizer, private data: ShareService) { }

  ngOnInit() {
    this.data.currentClass.subscribe(message => this.message = message);
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
    this.getData();
    // this.updateData();
    // this.items = [
    //   {
    //     label: 'Question Papers',
    //     content: ['what is ur name ?', 'what is ur name ?', 'what is ur name ?', 'what is ur name ?']
    //   },
    //   {
    //     label: 'Documents',
    //     content: ['1.dox', '2.dox', '3.dox']
    //   },
    //   {
    //     label: 'Videos',
    //     content: ['_thke1fERps', '_thke1fERps', '_thke1fERps']
    //   },
    //   {
    //     label: 'Images',
    //     content: ['1.png', '2.png', '3.png']
    //   }
    // ];
  }
  getData() {
    this.service.getAllData(this.message).subscribe((res) => {
      this.images = [];
      let imagesArr = res[3]['content'];
      imagesArr.forEach(value => {
        this.images.push({source:`assets/data/${this.message}/images/${value}`, alt:'Description for Image 1'})
      });
      this.items = res;
    });
  }
  updateData() {
    this.service.updateData({ name: 'Data' }).subscribe((res) => {
      this.getData();
    });
  }
  safeUrl(val) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + val);
  }

}
