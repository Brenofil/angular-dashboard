import { NumberSymbol } from "@angular/common";
import { Meta } from "@angular/platform-browser";

export class MovieModel {

  private Poster_Link: string;
  private Series_Title: string;
  private Released_Year: number;
  private Certificate: string;
  private Runtime: string;
  private Genre: string;
  private IMDB_Rating: number;
  private Overview: string;
  private Meta_score: number;
  private Director: string;
  private Star1: string;
  private Star2: string;
  private Star3: string;
  private Star4: string;
  private No_of_Votes: number;
  private Gross: string;

  constructor(
    Poster_Link: string,
    Series_Title: string,
    Released_Year: number,
    Certificate: string,
    Runtime: string,
    Genre: string,
    IMDB_Rating: number,
    Overview: string,
    Meta_score: number,
    Director: string,
    Star1: string,
    Star2: string,
    Star3: string,
    Star4: string,
    No_of_Votes: number,
    Gross: string
  ) {
    this.Poster_Link = Poster_Link;
    this.Series_Title = Series_Title;
    this.Released_Year = Released_Year;
    this.Certificate = Certificate;
    this.Runtime = Runtime;
    this.Genre = Genre;
    this.IMDB_Rating = IMDB_Rating;
    this.Overview = Overview;
    this.Meta_score = Meta_score;
    this.Director = Director;
    this.Star1 = Star1;
    this.Star2 = Star2;
    this.Star3 = Star3;
    this.Star4 = Star4;
    this.No_of_Votes = No_of_Votes;
    this.Gross = Gross;
  }

  public get posterLink(): string { return this.Poster_Link };

  public get title(): string { return this.Series_Title };

  public get year(): number { return this.Released_Year };

  public get certificate(): string { return this.Certificate };

  public get runtime(): string { return this.Runtime };

  public get genre(): string { return this.Genre };

  public get rating(): number { return this.IMDB_Rating };

  public get overview(): string { return this.Overview };

  public get meta_score(): number { return this.Meta_score };

  public get director(): string { return this.Director };

  public get star1(): string { return this.Star1 };

  public get star2(): string { return this.Star2 };

  public get star3(): string { return this.Star3 };

  public get star4(): string { return this.Star4 };

  public get no_of_Votes(): number { return this.No_of_Votes };

  public get gross(): string { return this.Gross };

}
