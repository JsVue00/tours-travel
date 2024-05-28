export interface IGetToureResponse {
    Id: number;
    Thumbnail: string;
    Title: string;
    CountryId: number;
    ProvinceId: number;
    DistrictId: number;
    AreaName: string;
    Price: number;
    Description: string;
    MapEmbed: string;
    ImageDetails: IImageDetail[];
    CreatedAt: Date;
    ModifiedAt: Date;
}

export interface IImageDetail {
    Id: number;
    TourId: number;
    ImageName: string;
    ImageOrder: number;
}