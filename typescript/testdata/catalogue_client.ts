/* eslint-disable */
export interface ICampaign {
  id: number,
  groups: Array<IGroup>
}

export interface ICatalogueFirstParams {
  groups: Array<IGroup>
}

export interface ICatalogueSecondParams {
  campaigns: Array<ICampaign>
}

export interface IGroup {
  title: string,
  sub: ISubGroup,
  nodes: Array<IGroup>,
  id: number,
  groups: Array<IGroup>,
  child?: IGroup
}

export interface ISubGroup {
  title: string,
  nodes: Array<IGroup>,
  id: number
}

export const factory = (send) => ({
  catalogue: {
    first(params: ICatalogueFirstParams): Promise<boolean> {
      return send('catalogue.First', params)
    },
    second(params: ICatalogueSecondParams): Promise<boolean> {
      return send('catalogue.Second', params)
    },
    third(): Promise<object> {
      return send('catalogue.Third')
    }
  }
})
