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
  id: number,
  title: string,
  nodes: Array<IGroup>,
  groups: Array<IGroup>,
  child?: IGroup,
  sub: ISubGroup
}

export interface ISubGroup {
  id: number,
  title: string,
  nodes: Array<IGroup>
}

export const factory = (send) => ({
  catalogue: {
    first(params: ICatalogueFirstParams): Promise<boolean> {
      return send('catalogue.First', params)
    },
    second(params: ICatalogueSecondParams): Promise<boolean> {
      return send('catalogue.Second', params)
    },
    third(): Promise<ICampaign> {
      return send('catalogue.Third')
    }
  }
})
