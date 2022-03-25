import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any>('https://www.breakingbadapi.com/api/characters')
    .subscribe(res => {
      console.log(res)
      this.characters = res
    })
  }

}
