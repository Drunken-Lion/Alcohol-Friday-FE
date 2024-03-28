export type RestaurantsRequestData = {
  neLatitude: number;
  neLongitude: number;
  swLatitude: number;
  swLongitude: number;
};

export type RestaurantsResponseData = [
  {
    restaurantId: number;
    latitude: number;
    longitude: number;
    restaurantName: string;
    restaurantCategory: string;
    restaurantAddress: string;
    businessStatus: string;
    provision: string[];
    restaurantProducts: [
      {
        id: number;
        name: string;
        files: { file: [{ path: string }] };
      },
    ];
  },
];

export interface SimpleInfoItemProps {
  restaurantId?: number;
  latitude?: number;
  longitude?: number;
  restaurantName: string;
  businessStatus: string;
  restaurantCategory: string;
  restaurantAddress: string;
  provision: string[];
  restaurantProducts: [
    {
      id: number;
      name: string;
      files: { file: [{ path: string }] };
    },
  ];
}

export type RestaurantInfoResponseData = {
  restaurantId: number;
  restaurantName: string;
  restaurantMenu?: string[];
  restaurantAddress?: string;
  businessStatus?: string;
  restaurantContactNumber?: number;
  provision?: string[];
  businessTime?: {
    MONDAY: { businessTime: string; breakTime: string };
    TUESDAY: { businessTime: string; breakTime: string };
    WEDNESDAY: { businessTime: string; breakTime: string };
    THURSDAY: { businessTime: string; breakTime: string };
    FRIDAY: { businessTime: string; breakTime: string };
    SATURDAY: { businessTime: string; breakTime: string };
    SUNDAY: { businessTime: string; breakTime: string };
    etc: string;
  };
};

export type RestaurantProductRequestData = {
  id?: number;
  page?: number;
};

export type RestaurantProductResponseData = {
  data: [{ id: number; name: string; alcohol: number; stockStatus: string; files: string[] }];
  pageInfo: { size: number; count: number };
};

export interface RestaurantProductProp {
  id: number;
  name: string;
  alcohol: number;
  stockStatus: string;
  files: { file: [{ keyname: string; path: string }] };
}

export type RestaurantCheckRequestData = {
  userLocationLatitude: number;
  userLocationLongitude: number;
  itemId: number;
};

export type RestaurantCheckResponseData = {
  data: [
    {
      restaurantId: number;
      distanceKm: number;
      productName: string;
      restaurantName: string;
      address: string;
    },
  ];
  pageInfo: { size: number; count: number };
};

export type RestaurantCheckItemData = {
  restaurantId: number;
  distanceKm: number;
  productName: string;
  restaurantName: string;
  address: string;
};

export interface ProvisionIcons {
  [key: string]: React.ReactNode;
}
