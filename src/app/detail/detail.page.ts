import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detailId : string;
  profile;

  constructor(
    private activareRouted : ActivatedRoute,
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.detailId = this.activareRouted.snapshot.paramMap.get("char_id")
    this.http.get("https://www.breakingbadapi.com/api/characters" + this.detailId)
    .subscribe((res) => {
      this.profile = res;
    });
  }

}
