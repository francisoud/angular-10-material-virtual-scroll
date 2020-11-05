import { ChangeDetectionStrategy, Component } from "@angular/core";

export class Item {
  title: string;
  companies: string[];

  constructor(title: string, companies: string[]) {
    this.title = title;
    this.companies = companies;
  }
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: Item[] = Array.from({ length: 100000 }).map(
    (_, i) => new Item(`Item #${i}`, this.randomCompanies())
  );

  randomCompanies(): string[] {
    const companies = [];
    const numberOfCompanies = Math.floor(Math.random() * 10);
    for (var i = 0; i < numberOfCompanies; i++) {
      companies.push(this.randomText(50));
    }
    return companies;
  }

  randomText(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
