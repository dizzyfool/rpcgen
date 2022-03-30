/* eslint-disable */
export interface IAnalyticsAddToCartParams {
    clientId: string,
    ua: string,
    host: string,
    cityId: number,
    products: Array<IApiCartRequestItem>,
    params?: IApiAnalyticsParams
}

export interface IAnalyticsCheckoutParams {
    clientId: string,
    ua: string,
    host: string,
    cityId: number,
    products: Array<IApiCartRequestItem>,
    step: number,
    orderType: string,
    params?: IApiAnalyticsParams
}

export interface IAnalyticsNewCartParams {
    clientId: string,
    ua: string,
    host: string,
    cityId: number,
    params?: IApiAnalyticsParams
}

export interface IAnalyticsOrderParams {
    clientId: string,
    ua: string,
    host: string,
    orderId: number,
    orderType: string,
    params?: IApiAnalyticsParams
}

export interface IAnalyticsProductViewParams {
    clientId: string,
    ua: string,
    host: string,
    cityId: number,
    params?: IApiAnalyticsParams
}

export interface IAnalyticsRemoveFromCartParams {
    clientId: string,
    ua: string,
    host: string,
    cityId: number,
    products: Array<IApiCartRequestItem>,
    params?: IApiAnalyticsParams
}

export interface IApiAlphabeticalGroup {
    value: string,
    title: string,
    items: Array<IApiValue>,
    hasMore: boolean
}

export interface IApiAnalyticsParams {
    yuid?: string, // Yandex uid
    yclid?: string, // Yandex yclid
    widgetUrl?: string, // Widget Url
    utmTerm?: string, // UTM parameter term
    utmSource?: string, // UTM parameter source
    utmMedium?: string, // UTM parameter medium
    utmContent?: string, // UTM parameter content
    utmCampaign?: string, // UTM parameter campaign
    turboapp?: string, // Yandex Turboapp
    slickjumpId?: string, // ID for tracking system slickjump
    referrer?: string, // Event referrer
    partnerSource?: string, // Partner source
    page?: string, // Event page
    experimentVariant?: string, // Experiment Variant
    experimentId?: string, // Experiment ID
    deeplinkUrl?: string, // Deeplink Url
    admitaduid?: string // Admitad uid
}

export interface IApiAppSettings {
    webvisorDisabled: boolean, // Webvisor is disabled
    readOnly: boolean, // API works in readonly mode
    payoutDisabled: boolean, // Payout is disabled
    discountDisabled: boolean, // Discount Program is Disabled
    deliveryPaymentDisabled: boolean, // Delivery Payment is Disabled
    cashbackDisabled: boolean, // Cashback is disabled
    apps: IApiAppSettingsApps
}

export interface IApiAppSettingsApps {
    webViewIOS: string, // Url for web view for iOS app
    webViewAndroid: string, // Url for web view for Android app
    mapAddressHintIOS: boolean, // Show map address hint for iOS app
    mapAddressHintAndroid: boolean, // Show map address hint for Android app
    lastSupportedVersionIOS: string, // Last supported version for iOS app
    lastSupportedVersionAndroid: string, // Last supported version for Android app
    lastActualVersionIOS: string, // Last actual version for iOS app
    lastActualVersionAndroid: string // Last actual version for Android app
}

export interface IApiArticle {
    totalViews: number,
    title: string,
    tags: Array<IApiArticleTag>,
    smallImage: string,
    rubric: IApiArticleRubric,
    relatedArticles: Array<IApiArticleSummary>,
    readingTime: number,
    ratingCount: number,
    rating: number,
    publicationDate: string,
    myRating: number,
    image: string,
    foreword: string,
    disclaimer: string,
    disableAds: boolean,
    content: string,
    commentsCount: number,
    categories: Array<IApiCategory>,
    bigImage: string,
    authorSummary: IApiArticleAuthorSummary,
    author: string,
    articleId: number,
    alias: string
}

export interface IApiArticleAuthor {
    vkontakte?: string,
    title: string,
    position: string,
    placesOfWork: Array<IApiValue>,
    placeOfWork: IApiValue, // deprecated
    licenses: Array<IApiValue>,
    instagram?: string,
    image: string,
    facebook?: string,
    experienceYears: number,
    email?: string,
    education: Array<IApiValue>,
    articlesRating: number,
    articlesCount: number,
    articles: Array<IApiArticle>,
    articleAuthorId: number,
    alias: string
}

export interface IApiArticleAuthorSummary {
    title: string,
    position: string,
    image: string,
    experienceYears: number,
    articleAuthorId: number,
    alias: string
}

export interface IApiArticleComment {
    siteUserId: number,
    plusVotes: number,
    name: string,
    minusVotes: number,
    isMyPlus: boolean,
    isMyMinus: boolean,
    createdAt: string,
    content: string,
    comments: Array<IApiArticleComment>,
    commentId: number,
    author?: IApiArticleAuthorSummary,
    article?: IApiArticle
}

export interface IApiArticleCommentComplaint {
    content: string,
    commentId: number
}

export interface IApiArticleCommentForm {
    content: string,
    commentId?: number,
    articleId: number
}

export interface IApiArticleCommentSearch {
    articleId?: number
}

export interface IApiArticleCommentsCount {
    total: number,
    parent: number
}

export interface IApiArticleRubric {
    title: string,
    alias: string
}

export interface IApiArticleSearch {
    tagAlias?: string,
    rubricAlias?: string,
    query?: string,
    authorId?: number
}

export interface IApiArticleSummary {
    title: string,
    rubric: IApiArticleRubric,
    image: string,
    articleId: number,
    alias: string
}

export interface IApiArticleTag {
    title: string,
    alias: string
}

export interface IApiAuthValidateRegister {
    isValidPhone: boolean,
    isValidName: boolean,
    isValidEmail: boolean,
    isValid: boolean
}

export interface IApiAutocompleteCategory {
    imageInfo?: IApiImageInfo,
    image: string,
    category: IApiCategory
}

export interface IApiAutocompleteSuggest {
    trade?: IApiPropertyValue,
    title: string,
    query?: string,
    productIds: Array<number>
}

export interface IApiBanner {
    url: string,
    type: string,
    productIds: Array<number>,
    orderNumber: number,
    label: string,
    image: string,
    campaign: string
}

export interface IApiBrand {
    url: string,
    title: string,
    productIds: Array<number>,
    imageHash: string,
    campaign: string
}

export interface IApiCart {
    reservationEndsAtText: string,
    reservationEndsAt: string,
    price: number,
    pickupIsToday: boolean,
    pickupDateText: string,
    pickupDateRelativeText: string,
    pickupDate: string,
    pharmacyNetwork?: IApiPharmacyNetwork,
    pharmacy: IApiPharmacy,
    notice?: string,
    loyaltyProgram?: IApiCartLoyaltyProgram,
    items: Array<IApiCartItem>,
    isValid: boolean,
    economy: number,
    discountType: string,
    discountRules: IApiCartDiscountRules,
    discountCard?: IApiDiscountCard,
    discount: number
}

export interface IApiCartAnalogItem {
    target: IApiCartTargetProduct,
    analogType: string,
    analog?: IApiCartAnalogProduct
}

export interface IApiCartAnalogProduct {
    product: IApiProductSummary,
    price: number,
    count: number
}

export interface IApiCartContext {
    pharmacies?: IApiCartContextPharmacies,
    geoObjectId?: number
}

export interface IApiCartContextPharmacies {
    pickupOnly: boolean,
    pharmacyIds: Array<number>
}

export interface IApiCartContextPharmaciesResponse {
    pickupOnly: boolean,
    pharmacyIds: Array<number>,
    pharmacyCount: number
}

export interface IApiCartContextResponse {
    pharmacies?: IApiCartContextPharmaciesResponse,
    geoObjectId?: number
}

export interface IApiCartDiscount {
    price: number,
    economy: number,
    discount: number
}

export interface IApiCartDiscountRules {
    rules: string,
    minOrderAmount: number,
    maxAmount: number,
    isPromocodePossible: boolean,
    isPromocodeApplicable: boolean,
    isPossible: boolean,
    isBonusesPossible: boolean,
    isBonusesApplicable: boolean,
    isAvailable: boolean,
    hasReferralOrders: boolean,
    amount: number
}

export interface IApiCartItem {
    productId: number,
    price: number,
    isLowQuantity: boolean,
    expirationDate: string,
    error?: string,
    count: number
}

export interface IApiCartLoyaltyProgram {
    price: number,
    partner: IApiPartnerSummary
}

export interface IApiCartOptions {
    isPartial: boolean
}

export interface IApiCartProduct {
    product: IApiProduct,
    count: number
}

export interface IApiCartRequestItem {
    productId: number,
    count: number
}

export interface IApiCartShare {
    url: string
}

export interface IApiCartTargetProduct {
    productId: number,
    price: number,
    count: number
}

export interface IApiCashbackCampaign {
    tooltips: Array<IApiCashbackTooltip>,
    title: string,
    startDate: string,
    products: Array<IApiProductSummary>,
    image: string,
    id: number,
    endDate: string,
    content: string,
    categoryId: number,
    cashbackType: IApiCashbackType,
    alias: string
}

export interface IApiCashbackCampaignSummary {
    title: string,
    startDate: string,
    image: string,
    id: number,
    endDate: string,
    content: string,
    categoryId: number,
    cashbackType: IApiCashbackType,
    alias: string
}

export interface IApiCashbackCategory {
    title: string,
    id: number,
    alias: string
}

export interface IApiCashbackCounters {
    outcomeAmount: number, // Amount of user payouts
    newIncomeCount: number, // Count of recently approved receipts with cashback items
    newIncomeAmount: number, // Amount of recently approved receipts with cashback items
    balance: number // Current user balance amount
}

export interface IApiCashbackPayoutForm {
    phone: string, // Phone number, 10 digits without "+7"
    amount: number // Payout amount. Err may be insufficient.
}

export interface IApiCashbackReceipt {
    text: string, // Description
    statusText: string, // End user status representation. May be empty
    status: string, // Possible values: waiting, processed, matched
    id: number, // Cashback receipt internal uteka ID
    fullAmount: number, // FullAmount full receipt amount
    displayId: string, // This ID clients should display for user
    date: string, // Receipt upload date
    amount: number // Signed receipt cashback amount. May be zero.
}

export interface IApiCashbackReceiptForm {
    time: string, // Время покупки в формате DD.MM.YY mm:ss. Ошибки: format, required
    sum: string, // Сумма на чеке. Ошибки: required, incorrect
    i: number, // Номер фискальных данных ФД (FiscalDocumentId). Ошибки: required, min, max
    fp: number, // Фискальный признак данных ФП(Д) (FiscalSign). Ошибки: required, min, max
    fn: string // Заводской номер фискального накопителя (ФН). Ошибки: required, format
}

export interface IApiCashbackReceiptItem {
    title: string,
    count: number,
    cashbackAmount: number,
    amount: number
}

export interface IApiCashbackSearch {
    query?: string,
    cityId?: number,
    categoryId?: number
}

export interface IApiCashbackTooltip {
    title: string,
    description: string,
    alias: string
}

export interface IApiCashbackTransaction {
    text: string, // Description
    statusText: string, // End user status representation. May be empty
    status: string, // Possible values: paid, processing, error
    isIncome: boolean, // Is income
    id: number, // Cashback transaction internal uteka ID
    date: string, // Transaction date
    amount: number // Signed transaction amount
}

export interface IApiCashbackType {
    value: number,
    type: string
}

export interface IApiCatalogueItem {
    tradeId: number,
    title: string,
    productId?: number,
    producer: string,
    minPrice: number,
    maxPrice: number,
    mainDisease: string,
    isAvailable: boolean,
    isAds: boolean,
    images: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    diseases: Array<string>,
    country: string,
    count: number,
    category: IApiCategory,
    cashbackType?: IApiCashbackType,
    alias: string
}

export interface IApiCategory {
    title: string,
    subCategories: Array<IApiSubCategory>,
    productsCount: number,
    parentTitle?: string,
    parentAlias?: string,
    nodes: Array<IApiCategory>,
    isPopular: boolean,
    imagePNG4x: string,
    imagePNG3x: string,
    imagePNG2x: string,
    imagePNG1x: string,
    image: string,
    color?: string,
    categoryId: number,
    alias: string
}

export interface IApiCity {
    yandexVerificationDesktop: string,
    yandexVerification: string,
    title: string,
    timezone: string,
    rectangle: string,
    prepositionalTitleRegion: string,
    prepositionalTitle: string,
    phone: string,
    pharmacyCount: number,
    longitude: number,
    localPhone: string,
    latitude: number,
    isTop: boolean,
    hasMetro: boolean,
    hasFolders: boolean,
    hasDiscount: boolean,
    hasDelivery: boolean,
    googleVerificationDesktop: string,
    googleVerification: string,
    genitiveTitle: string,
    deliveryLabel: string,
    cityId: number,
    alias: string
}

export interface IApiCourierInfo {
    street: string,
    number: string,
    intercom: string,
    floor: string,
    flat: string,
    entrance: string,
    courierTypeId: number,
    comment: string,
    city: string,
    address: string
}

export interface IApiDeliveryAddress {
    street: string,
    number: string,
    intercom: string,
    floor: string,
    flat: string,
    entrance: string,
    comment: string,
    city: string,
    address: string
}

export interface IApiDeliveryCart {
    notice?: string,
    items: Array<IApiCartItem>,
    deliveryOption: IApiDeliveryOption
}

export interface IApiDeliveryCourier {
    title: string,
    priceTotal: number,
    price: number,
    pharmacy: IApiPharmacy,
    deliveryPrice: number,
    deliveryInterval: string,
    courierTypeId: number,
    alias: string
}

export interface IApiDeliveryCourierCart {
    items: Array<IApiCartItem>,
    deliveryCourier: IApiDeliveryCourier
}

export interface IApiDeliveryInfo {
    street: string,
    number: string,
    longitude?: number,
    latitude?: number,
    intercom: string,
    floor: string,
    flat: string,
    entrance: string,
    deliveryTypeId: number,
    deliveryType: IApiDeliveryType,
    comment: string,
    city: string,
    building: string,
    address: string
}

export interface IApiDeliveryListItem {
    termsLink: string,
    termsDetails: string,
    terms: string,
    provider: IApiProvider,
    price: number,
    deliveryTypes: IApiDeliveryTypeList,
    cities: Array<string>
}

export interface IApiDeliveryOption {
    title: string,
    termsLink: string,
    terms: string,
    provider: IApiProvider,
    priceTotal: number,
    price: number,
    paymentTypes: Array<IApiPaymentType>,
    label: string,
    isInexactPrice: boolean,
    deliveryTypeId: number,
    deliveryTimeTo: string,
    deliveryTimeFrom: string,
    deliveryPrice: number,
    deliveryDateText: string,
    deliveryDate: string
}

export interface IApiDeliveryType {
    title: string,
    price: number,
    id: number,
    deliveryTimeTo: string,
    deliveryTimeFrom: string,
    deliveryDateText: string,
    deliveryDate: string
}

export interface IApiDeliveryTypeList {
    types: Array<IApiDeliveryType>,
    minPrice: number,
    city: string
}

export interface IApiDiscountCard {
    title: string,
    partner?: IApiPartnerSummary,
    id: number,
    codeType: string,
    code: string
}

export interface IApiDiscountCardForm {
    title: string,
    codeType: string,
    code: string
}

export interface IApiDiscountCounters {
    transactionsCount: number,
    referralBonuses: number,
    minOrderAmount: number,
    maxAmount: number,
    isPromocodeApplicable: boolean,
    hasReferralOrders: boolean,
    balance: number
}

export interface IApiDiscountTransaction {
    label: string,
    isWaiting: boolean,
    isIncome: boolean,
    date: string,
    amount: number
}

export interface IApiEntity {
    title: string,
    id: number
}

export interface IApiFAQCategory {
    title: string,
    items: Array<IApiFAQItem>,
    id: number,
    alias: string
}

export interface IApiFAQItem {
    title: string,
    image: string,
    id: number,
    content: string
}

export interface IApiFeedback {
    subject?: string,
    site?: string,
    phone?: string,
    pharmacies?: string,
    organizationType?: string,
    organizationName?: string,
    name?: string,
    email: string,
    content?: string,
    contact?: string
}

export interface IApiFullCashbackReceipt {
    text: string, // Description
    statusText: string, // End user status representation. May be empty
    status: string, // Possible values: waiting, processed, matched
    items: Array<IApiCashbackReceiptItem>, // Receipt items
    id: number, // Cashback receipt internal uteka ID
    displayId: string, // This ID clients should display for user
    date: string, // Receipt purchase date
    cashbackItemsCount: number, // Count of cashback items, may be 0.
    cashbackAmount: number, // Amount of cashback.
    amount: number // Signed receipt amount. May be zero.
}

export interface IApiGeoObject {
    title: string,
    pharmacyCount: number,
    longitude: number,
    latitude: number,
    geoObjectId: number,
    city: IApiCity
}

export interface IApiGeoObjectAutocompleteItem {
    title: string,
    pharmacyCount: number,
    parentTitle: string,
    parent?: IApiGeoObjectAutocompleteParentItem,
    geoObjectId?: number,
    city?: IApiCity
}

export interface IApiGeoObjectAutocompleteParentItem {
    title: string,
    pharmacyCount: number,
    parentTitle: string,
    geoObjectId?: number,
    city?: IApiCity
}

export interface IApiImageInfo {
    width: number,
    url: string,
    height: number,
    hash: string,
    blurhash: string
}

export interface IApiInstruction {
    desc_name?: string,
    desc_id?: string,
    USEMETHODANDDOSES: string,
    STORAGECONDITIONS: string,
    SPECIALGUIDELINES: string,
    SIDEACTIONS: string,
    REGISTRATIONHOLDER: string,
    RECOMMENDATIONS: string,
    PREGNANCYUSE: string,
    PRECAUTIONS: string,
    PHARMAPROPERTIES: string,
    PHARMAKINETIC: string,
    PHARMAGROUP: string,
    PHARMADYNAMIC: string,
    PHARMAACTIONS: string,
    OVERDOSE: string,
    MANUFACTURER: string,
    LITERATURE: string,
    INTERACTIONS: string,
    INSTRFORPAC: string,
    INFLUENCEONVEHICLES: string,
    INDICATIONS: string,
    FORM: string,
    EXPIRATION: string,
    DRUGFORMDESCR: string,
    DIRECTION: string,
    CONTRAINDICATIONS: string,
    CONSUMERCLAIMS: string,
    COMPOSITION: string,
    COMPONENTSPROPERTIES: string,
    COMMENT: string,
    CLINICALPHARMACOLOGY: string,
    CHILDREN: string,
    CHARACTERS: string,
    CAREFULLY: string,
    APTEKA_CONDITION: string,
    ACTONORG: string
}

export interface IApiInstructionField {
    value: string,
    url?: string,
    key: string,
    alias?: string
}

export interface IApiInstructionFields {
    results: Array<IApiInstructionField>,
    order: Array<string>
}

export interface IApiKit {
    urlShare: string,
    url: string,
    title: string,
    products: Array<IApiProductSummary>,
    minPrice: number,
    maxPrice: number,
    isAvailable: boolean,
    imageMedium: string,
    imageDesktop: string,
    imageBig: string,
    image: string,
    id: number,
    content?: string,
    category?: IApiCategory,
    blocks: Array<IApiKitBlock>
}

export interface IApiKitBlock {
    title: string,
    productIds: Array<number>,
    description: string
}

export interface IApiKitSummary {
    url: string,
    title: string,
    imageHash: string,
    image: string,
    id: number,
    icon: string
}

export interface IApiLastStatus {
    lastOrderUpdate: number,
    lastCartUpdate: number
}

export interface IApiLegalEntity {
    title: string,
    kpp: string,
    inn: string,
    fileUrl?: string,
    fileSize?: number,
    fileName?: string,
    fileExt?: string,
    address: string
}

export interface IApiLegalPartner {
    url: string,
    title: string,
    rulesUrl: string,
    image: string
}

export interface IApiLoginByJWTResponse {
    state: string, // exists, new, linked
    apiKey: string
}

export interface IApiMainBrand {
    url: string,
    title: string,
    productIds: Array<number>,
    imageHash: string,
    campaign: string
}

export interface IApiMainPageGroup {
    title: string,
    sorting: number,
    items: Array<IApiMainPageProduct>
}

export interface IApiMainPageProduct {
    title: string,
    sorting: number,
    showingType: number,
    productId: number,
    price: number,
    minPrice: number,
    maxPrice: number,
    image: string,
    alias: string
}

export interface IApiMainPartner {
    url: string,
    title: string,
    productIds: Array<number>,
    imageHash: string,
    campaign: string
}

export interface IApiMapArea {
    zoomLevel: number,
    longitude: number,
    latitude: number,
    cityId: number
}

export interface IApiMapByListItem {
    priceAlt: number,
    price: number,
    pickupText: string,
    partnerId?: number,
    minPrice: number,
    isPartial: boolean,
    isMissing: boolean,
    id: number,
    hasDiscountPrice: boolean,
    hasDiscountCard: boolean,
    extendedPickupId: number,
    distance: number,
    deliveryType: string,
    cart: Array<IApiMapCartItem>,
    active: boolean
}

export interface IApiMapCartItem {
    productId: number,
    priceAlt: number,
    price: number,
    isLowQuantity: boolean,
    expirationDate: string,
    count: number
}

export interface IApiMapClusterMarker {
    lon: number,
    lat: number,
    imageUrl: string,
    id: string,
    distance: number,
    count: number
}

export interface IApiMapClusterResponse {
    view: IApiMapView,
    statistics: IApiMapStatistics,
    pharmacyLists: IApiMapClusterResponsePharmacyLists,
    pharmacies: Record<number, IApiPharmacy>,
    partners: Record<number, IApiMapPartner>,
    map: IApiMapClusterResponseMap,
    filters?: IApiMapFilters,
    extendedPickups: Record<number, IApiMapExtendedPickupPrice>,
    count: number
}

export interface IApiMapClusterResponseMap {
    items: Array<IApiMapPharmacyMarker>,
    clusters: Array<IApiMapClusterMarker>
}

export interface IApiMapClusterResponsePharmacyLists {
    byMinPrice: Array<IApiMapByListItem>,
    byDistance: Array<IApiMapByListItem>
}

export interface IApiMapExtendedPickupPrice {
    price: number,
    pickupDateText: string,
    pickupDate: string,
    partnerId?: number,
    network: IApiPharmacyNetwork,
    minPrice: number,
    isPartial: boolean,
    hasDiscountPrice: boolean,
    cart: Array<IApiMapCartItem>,
    active: boolean
}

export interface IApiMapExtendedPickupPriceSummary {
    pickupText: string,
    id: number
}

export interface IApiMapFilters {
    pickupTomorrowOnly: boolean,
    pickupOnly: boolean,
    pickup1hOnly: boolean,
    partnerId?: number,
    minPrice?: number,
    maxPrice?: number,
    isOpen?: boolean,
    inViewOnly: boolean,
    fullCartOnly: boolean,
    extendedPickupOnly: boolean,
    discountPriceOnly: boolean
}

export interface IApiMapPartner {
    title: string,
    partnerId: number,
    icon: string,
    alias: string
}

export interface IApiMapPharmaciesResponse {
    totalDistinct: number,
    total: number,
    statistics: IApiMapStatistics,
    pharmacies: Record<number, IApiMapPharmacyPrice>,
    partners: Record<number, IApiMapPartner>,
    byMinPrice: Array<IApiMapByListItem>,
    byDistance: Array<IApiMapByListItem>
}

export interface IApiMapPharmacyMarker {
    priceAlt: number,
    price: number,
    pinLogoUrl: string, // deprecated
    pinData: IApiMapPinData,
    pickupText: string,
    pharmacyId: number,
    partnerId?: number,
    minPrice: number,
    lon: number,
    lat: number,
    isPartial: boolean,
    imageUrl: string,
    image: string,
    id: string,
    hasDiscountPrice: boolean,
    hasDiscountCard: boolean,
    extendedPickups: Array<IApiMapExtendedPickupPriceSummary>,
    extendedPickupIds: Array<number>,
    extendedPickupId?: number,
    distance: number,
    cart: Array<IApiMapCartItem>,
    active: boolean
}

export interface IApiMapPharmacyPrice {
    priceAlt: number,
    price: number,
    pharmacy: IApiPharmacy,
    partnerId?: number,
    minPrice: number,
    isPartial: boolean,
    hasDiscountPrice: boolean,
    extendedPickups: Array<IApiMapExtendedPickupPrice>,
    extendedPickup: IApiMapExtendedPickupPrice, // deprecated
    cart: Array<IApiMapCartItem>,
    active: boolean
}

export interface IApiMapPinData {
    totalCount: number,
    price: number,
    logoUrl: string,
    isPartial: boolean,
    inStockCount: number
}

export interface IApiMapPostal {
    zoomLevel: number,
    rectangle: string,
    longitude: number,
    latitude: number,
    city: IApiCity
}

export interface IApiMapSearch {
    withPartial: boolean,
    multiPickup: boolean,
    deliveryType: number,
    cityId: number,
    cartId?: string,
    cart: Array<IApiCartRequestItem>
}

export interface IApiMapStatistics {
    showFullCartButton: boolean,
    showExpressButton: boolean,
    showExpress1hButton: boolean,
    showDiscountPriceButton: boolean,
    pharmacyCount: number,
    minPrice: number,
    maxPrice: number,
    hasPickupFiltered: boolean,
    hasPickup: boolean,
    countInView: number,
    count: number
}

export interface IApiMapView {
    zoomLevel: number,
    swLon: number,
    swLat: number,
    pharmacyId?: number,
    outsideBox: number,
    neLon: number,
    neLat: number,
    myLon: number,
    myLat: number
}

export interface IApiMetaDetail {
    tradeLinks: Array<IApiTradeLink>,
    tradeAnalogsSearch?: IApiProductSearch,
    tradeAnalogsCount?: number,
    tradeActiveSubstances: Array<IApiValue>,
    subCategories: Array<IApiValue>,
    seoTradeReviewsCount?: number,
    seoTradeReviewsAvg?: number,
    seoTradeReviews: Array<IApiProductReview>,
    seoTradeContent?: IApiSEOTradeContent,
    seoInstructions: Array<IApiSEOInstruction>,
    seoCities?: IApiSEOBlock,
    seoBlockFAQ?: IApiSEOBlock,
    seoBlock?: IApiSEOBlock,
    robots?: string,
    propertyValue?: IApiPropertyValue,
    productSearch?: IApiProductSearch,
    product?: IApiProduct,
    pageTitle: string,
    pageHeader: string,
    openGraph: IApiOpenGraph,
    objectType?: string,
    objectTitle?: string,
    objectId?: number,
    objectClass: string,
    metaKeywords?: string,
    metaDescription?: string,
    category?: IApiCategory,
    breadcrumbs: Array<IApiValue>,
    alt?: string
}

export interface IApiOfficeBranch {
    postalCode: string,
    mapUrl: string,
    longitude: number,
    latitude: number,
    cityTitle: string,
    cityId: number,
    address: string
}

export interface IApiOpenGraph {
    url: string,
    type: string,
    title: string,
    site: string,
    image: string,
    description: string
}

export interface IApiOrder {
    type: string,
    status: IApiStatusOrder,
    reservationEndsAtText: string,
    reservationEndsAt: string,
    profile: IApiProfile,
    products: Array<IApiProductOrder>,
    pharmacy: IApiPharmacy,
    paymentInfo?: IApiOrderPaymentInfo,
    partner?: IApiPartnerSummary,
    orderId: number,
    notice?: string,
    loyaltyProgram?: IApiOrderLoyaltyProgram,
    extendedPickup?: IApiPharmacyNetwork,
    economy?: IApiOrderEconomy,
    displayOrderId: string,
    discountCard?: IApiDiscountCard,
    discount: number,
    deliveryProvider?: IApiPharmacyNetwork,
    deliveryInfo?: IApiDeliveryInfo,
    deliveryAtText?: string,
    deliveryAt?: string,
    createdAt: string,
    courierInfo?: IApiOrderCourierInfo,
    city: IApiCity,
    assemblyStatus?: IApiOrderAssemblyStatus,
    amountTotal: number,
    amount: number
}

export interface IApiOrderAssemblyStatus {
    status: string,
    percent: number,
    labelRelative: string, // deprecated
    labelExpired: string,
    label: string, // deprecated
    isToday: boolean,
    isExpired: boolean,
    endsAtText: string,
    endsAtRelativeText: string
}

export interface IApiOrderCounters {
    ready: number,
    finished: number,
    economy: number,
    completed: number,
    active: number
}

export interface IApiOrderCourierInfo {
    deliveryPrice: number,
    deliveryIntervalTo: string,
    deliveryIntervalFrom: string,
    address: IApiDeliveryAddress
}

export interface IApiOrderEconomy {
    value: number,
    title: string
}

export interface IApiOrderLoyaltyProgram {
    price: number,
    partner: IApiPartnerSummary
}

export interface IApiOrderPaymentInfo {
    paymentUrl?: string,
    paymentType: string,
    paymentDeadlineAt: string,
    isPaid: boolean
}

export interface IApiOrderSearch {
    sortingIsAsc?: boolean,
    sorting?: string,
    isFinished?: boolean,
    isCompleted?: boolean,
    isCancelled?: boolean,
    isActive?: boolean
}

export interface IApiOrderShare {
    url: string
}

export interface IApiOrderStatus {
    statusId: number,
    nameSystem: string,
    namePickup: string,
    nameExtendedPickup: string,
    nameDelivery: string,
    colorHex: string
}

export interface IApiOrderSummary {
    type: string,
    status: IApiStatusOrder,
    reservationEndsAtText: string,
    reservationEndsAt: string,
    profile: IApiProfile,
    products: Array<IApiProductOrder>,
    pharmacy: IApiPharmacy,
    paymentInfo?: IApiOrderPaymentInfo,
    partner?: IApiPartnerSummary,
    orderId: number,
    loyaltyProgram?: IApiOrderLoyaltyProgram,
    extendedPickup?: IApiPharmacyNetwork,
    economy?: IApiOrderEconomy,
    displayOrderId: string,
    discountCard?: IApiDiscountCard,
    discount: number,
    deliveryProvider?: IApiPharmacyNetwork,
    deliveryInfo?: IApiDeliveryInfo,
    deliveryAtText?: string,
    deliveryAt?: string,
    createdAt: string,
    courierInfo?: IApiOrderCourierInfo,
    city: IApiCity,
    assemblyStatus?: IApiOrderAssemblyStatus,
    amountTotal: number,
    amount: number
}

export interface IApiPartner {
    title: string,
    squareImage: string,
    siteUrl: string,
    rulesUrl: string,
    rules: string,
    phone: string,
    pharmacyCount: number,
    partnerId: number,
    ogrn: string,
    loyaltyRules: string,
    legalNameShort: string,
    legalName: string,
    legalAddress: string,
    inn: string,
    image: string,
    fileUrl?: string,
    fileSize?: number,
    fileName?: string,
    fileExt?: string,
    distanceTradingRules: string,
    distanceTradingLinks: Array<IApiValue>, // deprecated
    description: string,
    color: string,
    alias: string
}

export interface IApiPartnerLoyaltyProgramRules {
    partner: IApiPartnerSummary,
    list: Array<string>
}

export interface IApiPartnerSummary {
    title: string,
    squareImage: string,
    rulesUrl: string,
    pharmacyCount: number,
    partnerId: number,
    image: string,
    distanceTradingLinks: Array<IApiValue>, // deprecated
    color: string,
    alias: string
}

export interface IApiPaymentInfo {
    paymentType: string
}

export interface IApiPaymentType {
    title: string,
    isPaymentRequired: boolean,
    alias: string
}

export interface IApiPharmacy {
    workingHoursText: string,
    workingHours?: Array<string>, // deprecated
    title: string,
    timezone: string,
    pickupText: string,
    phoneExtended: string,
    phone: string,
    pharmacyNetworkId: number,
    outOfTurn: boolean, // deprecated
    orderNumber: number, // deprecated
    orderConfirmationTime: number,
    openCloseText: string,
    network: string,
    metroStationId?: number,
    metroStation?: IApiStation,
    longitude: number,
    latitude: number,
    isOpen: boolean,
    isFavorite: boolean,
    is24hour: boolean,
    image: string,
    id: number,
    hasPickupToday: boolean,
    hasExtendedPickup: boolean,
    hasDiscount: boolean,
    fullPickupText: string,
    confirmationText: string, // deprecated
    city: string,
    cashOnly: boolean,
    alias: string,
    address: string
}

export interface IApiPharmacyCard {
    workingHoursText: string,
    workingHours?: Array<string>, // deprecated
    title: string,
    timezone: string,
    pickupText: string,
    phoneExtended: string,
    phone: string,
    pharmacyNetworkId: number,
    outOfTurn: boolean, // deprecated
    orderNumber: number, // deprecated
    orderConfirmationTime: number,
    openCloseText: string,
    network: string,
    nearestPharmacies: Array<IApiPharmacy>,
    metroStationId?: number,
    metroStation?: IApiStation,
    longitude: number,
    latitude: number,
    isOpen: boolean,
    isFavorite: boolean,
    is24hour: boolean,
    image: string,
    id: number,
    hasPickupToday: boolean,
    hasExtendedPickup: boolean,
    hasDiscount: boolean,
    fullPickupText: string,
    confirmationText: string, // deprecated
    city: string,
    cashOnly: boolean,
    alias: string,
    address: string
}

export interface IApiPharmacyClusterMarker {
    longitude: number,
    latitude: number,
    imageUrl: string,
    id: string,
    distance: number,
    count: number
}

export interface IApiPharmacyClusterResponse {
    view: IApiMapView,
    pharmacyList: Array<IApiPharmacy>,
    map: IApiPharmacyClusterResponseMap,
    count: number
}

export interface IApiPharmacyClusterResponseMap {
    pharmacyMarkers: Array<IApiPharmacyMarker>,
    clusterMarkers: Array<IApiPharmacyClusterMarker>
}

export interface IApiPharmacyCount {
    priceMin: number,
    priceMax: number,
    pharmacyMinPrice: number,
    isDeliveryCourierAvailable: boolean, // deprecated
    isDeliveryAvailable: boolean,
    deliveryAtText: string,
    count: number,
    active: boolean
}

export interface IApiPharmacyMarker {
    pharmacy: IApiPharmacy,
    longitude: number,
    latitude: number,
    id: string,
    distance: number
}

export interface IApiPharmacyNetwork {
    title: string,
    phones: Array<string>,
    outOfTurn: boolean,
    orderConfirmationTime: number,
    imageHash: string,
    image: string,
    id: number,
    externalId: string
}

export interface IApiPharmacySearch {
    pickupOnly: boolean,
    partnerIds: Array<number>,
    discountPriceOnly: boolean,
    cityId: number,
    cartId?: string
}

export interface IApiPharmacyStatistics {
    hasPickup: boolean,
    hasDiscountPrice: boolean,
    count: number
}

export interface IApiPicture {
    smallUrl: string,
    mediumUrl: string,
    bigUrl: string
}

export interface IApiPopularQuery {
    url: string,
    title: string,
    singleProductId?: number,
    productSearch: IApiProductSearch,
    productIds: Array<number>
}

export interface IApiPrescription {
    titles: Array<string>,
    prescriptionId: number,
    organization: string,
    items: Array<IApiPrescriptionItem>,
    dateEnd: string,
    createdAt: string,
    address: string
}

export interface IApiPrescriptionItem {
    title: string,
    products: Array<IApiPrescriptionProduct>
}

export interface IApiPrescriptionProduct {
    product: IApiProductSummary,
    count: number
}

export interface IApiPrescriptionSummary {
    titles: Array<string>,
    prescriptionId: number,
    organization: string,
    dateEnd: string,
    createdAt: string,
    address: string
}

export interface IApiProduct {
    weightApps: number,
    weight: number,
    values: Array<IApiValue>,
    tradeProductsCount: number,
    trade?: IApiPropertyValue,
    title: string,
    subtitle: string,
    strictAnalogsMinPrice?: number,
    strictAnalogsCount?: number,
    seoLinks: Array<IApiSeoLink>,
    seoBlockTitleShort: string,
    seoBlockTitle: string,
    reviewSummary: Array<IApiProductReview>,
    reviewRating?: number,
    reviewCount: number,
    releaseForms: Array<IApiReleaseForm>,
    quantityDelivery: number,
    quantity: number,
    propertyValueListings: Array<IApiValue>,
    propTitle: string,
    productId: number,
    producerProperty?: IApiPropertyValue,
    producer?: string,
    pickup: boolean,
    pharmacyPickupCount: number,
    pharmacyCount: number,
    packDosage?: string,
    pack1n?: string,
    minPrice: number,
    maxPrice: number,
    mainDisease?: string,
    lastPrice?: number,
    lastDate?: string,
    label?: string,
    isFavorite: boolean,
    isAvailable: boolean,
    isAds: boolean,
    instruction?: IApiInstruction,
    images: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    imageHashes: Array<string>,
    hasRecipe: boolean,
    hasInstruction: boolean,
    fullTitle: string,
    fullProducer: string,
    dose?: string,
    dosageFormSize?: string,
    dosage?: string,
    diseases: Array<string>,
    dfc?: string,
    delivery: boolean,
    country?: string,
    certificatesPictures: Array<IApiPicture>,
    certificates: Array<string>,
    categoryProperties: Array<IApiProperty>,
    category?: IApiCategory,
    cashbackType?: IApiCashbackType,
    campaign?: string,
    avgPrice: number,
    analogsCount: number, // deprecated
    analogBanner?: IApiProductSummary,
    amountText: string,
    amount: number,
    alias: string,
    activeSubstanceProperty?: IApiPropertyValue,
    activeSubstance?: string,
    GRLSUrl?: string
}

export interface IApiProductAutocompleteInfo {
    trades: Array<IApiPropertyValue>,
    suggests: Array<IApiAutocompleteSuggest>,
    promoProduct?: IApiProductSummary,
    products: Array<IApiProductSummary>,
    producers: Array<IApiPropertyValue>,
    categories: Array<IApiAutocompleteCategory>
}

export interface IApiProductBanner {
    url: string,
    title: string,
    bannerType: string
}

export interface IApiProductFilters {
    properties: Array<IApiProperty>,
    minPrice?: number,
    maxPrice?: number,
    mainProperties: Array<IApiPropertyValue>,
    countDelivery?: number,
    count?: number,
    categories: Array<IApiCategory>
}

export interface IApiProductOfTheDay {
    product: IApiProductSummary,
    categoryId: number
}

export interface IApiProductOrder {
    weightApps: number,
    weight: number,
    trade?: IApiPropertyValue,
    title: string,
    subtitle: string,
    reviewRating?: number,
    reviewCount: number,
    quantity: number,
    propTitle: string,
    productId: number,
    producer?: string,
    price: number,
    pickup: boolean,
    pharmacyPickupCount: number,
    pharmacyCount: number,
    packDosage?: string,
    pack1n?: string,
    minPrice: number,
    maxPrice: number,
    mainDisease?: string,
    lastPrice?: number,
    lastDate?: string,
    label?: string,
    isLowQuantity: boolean,
    isAvailable: boolean,
    isAds: boolean,
    images: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    imageHashes: Array<string>,
    hasRecipe: boolean,
    hasInstruction: boolean,
    fullTitle: string,
    fullProducer: string,
    expirationDate: string,
    dose?: string,
    dosageFormSize?: string,
    dosage?: string,
    diseases: Array<string>,
    dfc?: string,
    delivery: boolean,
    country?: string,
    count: number,
    category?: IApiCategory,
    cashbackType?: IApiCashbackType,
    campaign?: string,
    avgPrice: number,
    amountText: string,
    amount: number,
    alias: string,
    activeSubstance?: string,
    GRLSUrl?: string
}

export interface IApiProductPartnerPrice {
    pharmacyCount: number,
    partnerId: number,
    partner: IApiPartnerSummary,
    minPrice: number,
    hasOtherPrices: boolean
}

export interface IApiProductPrice {
    productId: number,
    pickup: boolean,
    pharmacyCount: number,
    minPrice: number,
    maxPrice: number,
    isAvailable: boolean,
    delivery: boolean
}

export interface IApiProductPriceHistory {
    minPrice: number,
    maxPrice: number,
    label: string,
    avgPrice: number
}

export interface IApiProductReminder {
    startAt: string,
    scheduleUsage: number,
    scheduleProgress: Array<IApiReminderScheduleProgressItem>,
    schedule: Array<IApiReminderScheduleItem>,
    productReminderId: number,
    product?: IApiProductSummary,
    notificationSettings?: IApiReminderNotification,
    medicationRule: IApiValue,
    frequency: number,
    duration?: number
}

export interface IApiProductReminderSummary {
    startAt: string,
    scheduleUsage: number,
    schedule: Array<IApiReminderScheduleItem>,
    productReminderId: number,
    product?: IApiProductSummary,
    notificationSettings?: IApiReminderNotification,
    medicationRule: IApiValue,
    frequency: number,
    duration?: number
}

export interface IApiProductReview {
    siteUserId?: number,
    reviewId: number,
    rating: number,
    product?: IApiProductSummary,
    plusVotes: number,
    name: string,
    minusVotes: number,
    isVerified: boolean,
    isMyPlus: boolean,
    isMyMinus: boolean,
    imageHashes: Array<string>,
    disadvantages: string,
    createdAt: string,
    content: string,
    comments: Array<IApiProductReviewComment>,
    advantages: string
}

export interface IApiProductReviewComment {
    siteUserId: number,
    reviewId: number,
    plusVotes: number,
    name: string,
    minusVotes: number,
    isProducer: boolean,
    isMyPlus: boolean,
    isMyMinus: boolean,
    createdAt: string,
    content: string,
    commentId: number,
    avatarHash: string
}

export interface IApiProductReviewCommentRating {
    plusVotes: number,
    minusVotes: number,
    isMyPlus: boolean,
    isMyMinus: boolean
}

export interface IApiProductReviewRating {
    plusVotes: number,
    minusVotes: number,
    isMyPlus: boolean,
    isMyMinus: boolean
}

export interface IApiProductReviewReleaseForm {
    title: string,
    reviewCount: number,
    releaseFormId: number,
    rating: number
}

export interface IApiProductReviewStatistics {
    totalCount: number,
    releaseForms: Array<IApiProductReviewReleaseForm>
}

export interface IApiProductSearch {
    withDelivery?: boolean,
    withChildCategories?: boolean,
    tradeIds?: Array<number>,
    tradeId?: number,
    sortingIsAsc?: boolean,
    sorting?: string,
    showDisabled?: boolean,
    query?: string,
    propertyValueIds?: Array<number>,
    productIds?: Array<number>,
    priceMin?: number,
    priceMax?: number,
    pharmacyIds?: Array<number>,
    mergedPropertyIds?: Array<number>,
    mainPropertyIds?: Array<number>,
    isPopular?: boolean,
    filterPropertyValueIds?: Array<number>,
    filterCategoryIds?: Array<number>,
    excludePropertyValueIds?: Array<number>,
    excludeProductId?: number,
    cityId?: number,
    categoryIds?: Array<number>,
    categoryId?: number,
    cartId?: string,
    analogProductId?: number
}

export interface IApiProductSummary {
    weightApps: number,
    weight: number,
    trade?: IApiPropertyValue,
    title: string,
    subtitle: string,
    reviewRating?: number,
    reviewCount: number,
    quantity: number,
    propTitle: string,
    productId: number,
    producer?: string,
    pickup: boolean,
    pharmacyPickupCount: number,
    pharmacyCount: number,
    packDosage?: string,
    pack1n?: string,
    minPrice: number,
    maxPrice: number,
    mainDisease?: string,
    lastPrice?: number,
    lastDate?: string,
    label?: string,
    isAvailable: boolean,
    isAds: boolean,
    images: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    imageHashes: Array<string>,
    hasRecipe: boolean,
    hasInstruction: boolean,
    fullTitle: string,
    fullProducer: string,
    dose?: string,
    dosageFormSize?: string,
    dosage?: string,
    diseases: Array<string>,
    dfc?: string,
    delivery: boolean,
    country?: string,
    category?: IApiCategory,
    cashbackType?: IApiCashbackType,
    campaign?: string,
    avgPrice: number,
    amountText: string,
    amount: number,
    alias: string,
    activeSubstance?: string,
    GRLSUrl?: string
}

export interface IApiProfile {
    withOTCPersonalData: boolean,
    withBayerPersonalData: boolean,
    phone: string,
    name: string,
    isPushNotificationEnabled: boolean,
    isMarketingNotificationEnabled: boolean,
    isEmailNotificationEnabled: boolean,
    id: number,
    email: string,
    cityId: number,
    addressWork: string,
    addressHome: string
}

export interface IApiProfileFavoriteProductSearch {
    sortingIsAsc?: boolean,
    sorting?: string,
    cityId?: number,
    cartId?: string
}

export interface IApiProfileOrderProductSearch {
    sortingIsAsc?: boolean,
    sorting?: string,
    cityId?: number,
    cartId?: string
}

export interface IApiProfileRegister {
    withOTCPersonalData?: boolean,
    withBayerPersonalData?: boolean,
    isMarketingNotificationEnabled?: boolean
}

export interface IApiProfileUpdate {
    withOTCPersonalData?: boolean,
    withBayerPersonalData?: boolean,
    name?: string,
    isPushNotificationEnabled?: boolean,
    isMarketingNotificationEnabled?: boolean,
    isEmailNotificationEnabled?: boolean,
    idfa?: string,
    iOSfcmToken?: string,
    gender?: string,
    gaid?: string,
    email?: string,
    cityId?: number,
    birthDate?: string,
    androidFcmToken?: string,
    addressWork?: string,
    addressHome?: string
}

export interface IApiPromoItem {
    url: string,
    tradeId?: number,
    title: string,
    productIds: Array<number>,
    productId: number,
    image: string,
    campaign?: string
}

export interface IApiProperty {
    values: Array<IApiPropertyValue>,
    title: string,
    propertyId: number,
    description: string,
    alias: string
}

export interface IApiPropertyValue {
    url?: string,
    title: string,
    propertyValueId: number,
    propertyId: number,
    imageInfo?: IApiImageInfo,
    image?: string,
    hasInstruction: boolean,
    alias: string
}

export interface IApiProvider {
    title: string,
    phones: Array<string>,
    pharmacyNetworkId: number,
    image: string,
    id: number
}

export interface IApiProviderCount {
    priceMin?: number,
    priceMax?: number,
    priceDeliveryMin: number,
    count: number
}

export interface IApiReadingLink {
    url: string,
    image: string,
    description: string,
    alt: string
}

export interface IApiReleaseForm {
    title: string,
    productId: number,
    minPrice: number,
    alias: string
}

export interface IApiReminderForm {
    startAt: string, // Начало курса
    scheduleUsage: number, // Частота приёма лекарства в месяц (ежедневно, раз в 2 дня и т.п.)
    schedule: Array<IApiReminderScheduleItem>, // График времени приема лекарств
    productReminderId: number,
    productId: number,
    notificationSettings?: IApiReminderNotification,
    medicationRule: string, // Правило приема
    frequency: number, // Частота приёма лекарства в день
    duration?: number // Длительность курса, null - постоянно
}

export interface IApiReminderNotification {
    notificationStocks: number, // Запас препарата для напоминания
    currentStocks: number // Текущий запас препарата
}

export interface IApiReminderProgressForm {
    progressRemove: Array<string>,
    progressAdd: Array<string>,
    productReminderId: number
}

export interface IApiReminderScheduleItem {
    time: string, // Время приема
    count: number // Количество единиц для приема
}

export interface IApiReminderScheduleProgressItem {
    dateTime: string,
    count: number,
    completed: boolean
}

export interface IApiReviewCommentComplaint {
    content: string,
    commentId: number
}

export interface IApiReviewCommentForm {
    reviewId: number,
    content: string
}

export interface IApiReviewComplaint {
    reviewId: number,
    content: string
}

export interface IApiReviewForm {
    rating: number,
    productId: number,
    imageHashes: Array<string>,
    disadvantages: string,
    content: string,
    advantages: string
}

export interface IApiSEOBlock {
    type: string,
    title: string,
    text: string,
    items: Array<IApiSEOBlockItem>
}

export interface IApiSEOBlockItem {
    url: string,
    title: string,
    text: string,
    minPrice: number,
    class: string,
    cityId: number,
    cityAlias: string
}

export interface IApiSEOInstruction {
    values: Array<IApiInstructionField>,
    product: IApiProductSummary,
    key: string,
    instructions: Array<IApiInstructionField>,
    certificatesPictures: Array<IApiPicture>,
    certificates: Array<string>
}

export interface IApiSEOTradeContent {
    title: string,
    content: string
}

export interface IApiSeoLink {
    url: string,
    title: string,
    group: string
}

export interface IApiSiteBusinessCounters {
    turnover: IApiValue,
    siteTraffic: IApiValue,
    products: IApiValue,
    pharmacies: IApiValue,
    appsTraffic: IApiValue
}

export interface IApiSiteCounters {
    years: IApiValue,
    visitors: IApiValue,
    regions: IApiValue,
    products: IApiValue,
    pharmacies: IApiValue,
    networks: IApiValue,
    economy: IApiValue
}

export interface IApiStation {
    title: string,
    stationId: number,
    longitude: number,
    latitude: number,
    color: string,
    cityId: number
}

export interface IApiStatusOrder {
    workflowPercent: number,
    userStatusId: number,
    statusId: number,
    reservationPercent: number,
    name: string,
    isReady: boolean,
    isDeletableByUser: boolean,
    isCurrent: boolean,
    isCompleted: boolean,
    isCompletableByUser: boolean,
    isCollecting: boolean,
    isCancelledCompletableByUser: boolean,
    isCancelled: boolean,
    isCancelable: boolean,
    isAddable: boolean,
    imageSvg: string,
    imagePng4x: string,
    imagePng3x: string,
    imagePng2x: string,
    imagePng1x: string,
    description: string,
    colorHex: string,
    color: string,
    addableTill?: string
}

export interface IApiSubCategory {
    title: string,
    mergedPropertyIds: Array<number>,
    id: number,
    categoryId: number,
    alias: string
}

export interface IApiSuggestAddress {
    type: string,
    title: string,
    subtitle: string,
    rectangle: string,
    longitude: number,
    latitude: number,
    fullTitle: string
}

export interface IApiSuggestAddressDelivery {
    type: string,
    title: string,
    subtitle: string,
    street: string,
    number: string,
    isDeliveryAvailable: boolean,
    fullTitle: string
}

export interface IApiTradeLink {
    url: string,
    title: string,
    productsCount: number,
    minPrice: number,
    image: string
}

export interface IApiUserCartResponse {
    result: boolean,
    pharmacyCountPickUp?: IApiPharmacyCount,
    pharmacyCountDelivery?: IApiPharmacyCount,
    missingProducts: Array<IApiCartProduct>,
    lastCartUpdate: number,
    isDeliveryPossible: boolean,
    isDeliveryCourierAvailable: boolean, // deprecated
    isDeliveryAvailable: boolean,
    hasCompletePickUp: boolean,
    cityId: number,
    cartPickUp: Array<IApiCartProduct>, // deprecated
    cartId: string,
    cartDelivery: Array<IApiCartProduct>, // deprecated
    cartContext?: IApiCartContextResponse,
    cart: Array<IApiCartProduct>
}

export interface IApiValue {
    value: string,
    title: string
}

export interface IAppCheckCaptchaParams {
    token: string
}

export interface IAppLastModifiedParams {
    cartId?: string
}

export interface IArticleAddCommentParams {
    formData: IApiArticleCommentForm
}

export interface IArticleAuthorByAliasParams {
    alias: string
}

export interface IArticleCommentsCountParams {
    search?: IApiArticleCommentSearch
}

export interface IArticleCommentsParams {
    search?: IApiArticleCommentSearch,
    page?: number,
    pageSize?: number
}

export interface IArticleComplaintCommentParams {
    complaint: IApiArticleCommentComplaint
}

export interface IArticleCountParams {
    search?: IApiArticleSearch
}

export interface IArticleDislikeCommentParams {
    id: number
}

export interface IArticleGetByAliasParams {
    alias: string,
    cityId?: number,
    cartId?: string
}

export interface IArticleGetByProductParams {
    productId: number,
    count?: number
}

export interface IArticleGetParams {
    search?: IApiArticleSearch,
    page?: number,
    pageSize?: number
}

export interface IArticleLikeCommentParams {
    id: number
}

export interface IArticleRateParams {
    articleId: number,
    rating: number
}

export interface IArticleValidateCommentParams {
    formData: IApiArticleCommentForm
}

export interface IAuthChangePasswordParams {
    old: string,
    new: string
}

export interface IAuthGetCodeByCallParams {
    phone?: string,
    mustExist?: boolean
}

export interface IAuthGetCodeParams {
    phone?: string,
    mustExist?: boolean,
    sendRealSms?: boolean
}

export interface IAuthLoginByJWTParams {
    jwtToken: string
}

export interface IAuthLoginByYandexAccessTokenParams {
    cityId: number,
    token: string,
    phone?: string,
    code?: string
}

export interface IAuthLoginByYandexJWTParams {
    cityId: number,
    jwtToken: string,
    phone?: string,
    code?: string
}

export interface IAuthLoginParams {
    code?: string,
    phone: string,
    password?: string
}

export interface IAuthRegisterParams {
    code: string,
    phone: string,
    name: string,
    cityId: number,
    email?: string,
    sendInfoSms?: boolean,
    profile?: IApiProfileRegister
}

export interface IAuthRemindPasswordParams {
    phone: string,
    code: string
}

export interface IAuthValidateRegisterParams {
    phone: string,
    name: string,
    email?: string
}

export interface ICartAddBulkParams {
    cityId: number,
    products: Array<IApiCartRequestItem>,
    cartId?: string,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartAddParams {
    cityId: number,
    product: IApiCartRequestItem,
    cartId?: string,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartAnalogsParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    pharmacyNetworkId?: number
}

export interface ICartDestroyParams {
    cartId?: string
}

export interface ICartGetParams {
    cityId: number,
    cartId?: string,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartRefreshParams {
    cityId: number,
    cartId?: string,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartRemoveParams {
    product: IApiCartRequestItem,
    cartId: string,
    cityId?: number,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartReplaceParams {
    cityId?: number,
    targetProductId: number,
    product: IApiCartRequestItem,
    cartId: string,
    deliveryType?: number,
    options?: IApiCartOptions
}

export interface ICartSetContextParams {
    cityId: number,
    cartId?: string,
    deliveryType?: number,
    cartContext: IApiCartContext,
    options?: IApiCartOptions
}

export interface ICartSetSharedParams {
    cityId: number,
    cartId?: string,
    deliveryType?: number,
    url: string,
    options?: IApiCartOptions
}

export interface ICartShareParams {
    cartId: string
}

export interface ICashbackCategoriesParams {
    cityId: number
}

export interface ICashbackCountParams {
    search: IApiCashbackSearch
}

export interface ICashbackGetByIdParams {
    campaignId: number,
    cityId: number
}

export interface ICashbackGetParams {
    search: IApiCashbackSearch,
    page?: number,
    pageSize?: number
}

export interface ICashbackGetReceiptsParams {
    page?: number,
    pageSize?: number
}

export interface ICashbackPayoutParams {
    formData: IApiCashbackPayoutForm
}

export interface ICashbackReceiptByIdParams {
    receiptId: number
}

export interface ICashbackSaveReceiptParams {
    qrData?: string,
    formData?: IApiCashbackReceiptForm
}

export interface ICashbackValidatePayoutParams {
    formData: IApiCashbackPayoutForm
}

export interface ICashbackValidateReceiptParams {
    qrData?: string,
    formData?: IApiCashbackReceiptForm
}

export interface ICatalogueAlphabeticalIndexParams {
    cityId: number,
    property?: string,
    categoryId?: number
}

export interface ICatalogueAlphabeticalListGroupedParams {
    cityId: number,
    property?: string,
    count?: number
}

export interface ICatalogueAlphabeticalListParams {
    cityId: number,
    property?: string,
    categoryId?: number,
    group: string
}

export interface ICatalogueCategoriesParams {
    cityId: number,
    collapse?: boolean,
    isPopular?: boolean,
    pharmacyIds?: Array<string>,
    withEmpty?: boolean
}

export interface ICatalogueCategoryBranchParams {
    categoryId: number,
    cityId: number
}

export interface ICatalogueCitiesByQueryParams {
    query: string,
    count?: number
}

export interface ICatalogueCityByAliasParams {
    alias: string
}

export interface ICatalogueCityByIdParams {
    cityId: number
}

export interface ICatalogueCityByIpParams {
    ip?: string
}

export interface ICatalogueCityByLatLonParams {
    latitude: number,
    longitude: number
}

export interface ICatalogueCountParams {
    search: IApiProductSearch
}

export interface ICatalogueGeoObjectByIdParams {
    geoObjectId: number
}

export interface ICatalogueGeoObjectsByQueryParams {
    query: string,
    count?: number
}

export interface ICatalogueGeoObjectsParams {
    page?: number,
    pageSize?: number
}

export interface ICatalogueGetParams {
    search: IApiProductSearch,
    page?: number,
    pageSize?: number
}

export interface ICatalogueMainPageParams {
    cityId?: number,
    pharmacyIds?: Array<string>
}

export interface ICataloguePharmacyNetworksParams {
    cityId: number
}

export interface ICatalogueStationsParams {
    cityId: number
}

export interface ICatalogueSuggestAddressesParams {
    cityId: number,
    query: string,
    count?: number
}

export interface IDeliveryAddressHistoryParams {
    cityId: number
}

export interface IDeliveryCalculateCourierParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    address: IApiDeliveryAddress,
    courierTypeId: number
}

export interface IDeliveryCalculateParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    address: IApiDeliveryAddress,
    deliveryTypeId: number
}

export interface IDeliveryCourierListParams {
    cityId: number,
    cart: Array<IApiCartRequestItem>,
    address: IApiDeliveryAddress
}

export interface IDeliveryListParams {
    cityId: number,
    cart: Array<IApiCartRequestItem>,
    address: IApiDeliveryAddress,
    deliveryType?: number,
    group?: string
}

export interface IDeliverySuggestAddressesParams {
    cityId: number,
    query: string,
    count?: number
}

export interface IDiscountDeleteCardParams {
    id: number
}

export interface IDiscountPartnersParams {
    cityId: number
}

export interface IDiscountSaveCardParams {
    cityId: number,
    formData: IApiDiscountCardForm
}

export interface IDiscountSaveCardResponse {
    title: string,
    partner?: IApiPartnerSummary,
    id: number,
    codeType: string,
    code: string
}

export interface IDiscountTransactionsParams {
    page: number,
    pageSize: number
}

export interface IDiscountValidateCardParams {
    cityId: number,
    formData: IApiDiscountCardForm
}

export interface IFieldError {
    field: string,
    error: string,
    constraint?: IFieldErrorConstraint // Help with generating an error message.
}

export interface IFieldErrorConstraint {
    min: number, // Min value for field.
    max: number // Max value for field.
}

export interface IMapAreaByIpParams {
    ip?: string
}

export interface IMapClusterParams {
    data: IApiMapSearch,
    view: IApiMapView,
    filters?: IApiMapFilters
}

export interface IMapPharmaciesByPriceParams {
    data: IApiMapSearch,
    count?: number
}

export interface IMapPharmaciesParams {
    data: IApiMapSearch,
    view: IApiMapView,
    filters?: IApiMapFilters,
    listType?: string,
    start?: number,
    count?: number
}

export interface IMapPostalParams {
    code: number
}

export interface IMapStatisticsParams {
    data: IApiMapSearch,
    filters?: IApiMapFilters
}

export interface IMetaAddressParams {
    cityId?: number
}

export interface IMetaGetParams {
    url: string,
    cityId?: number,
    page?: number,
    pageSize?: number,
    cartId?: string
}

export interface IOrdersAddableProductsParams {
    orderId: number
}

export interface IOrdersCalculateAddableParams {
    orderId: number,
    cart: Array<IApiCartRequestItem>
}

export interface IOrdersCalculateDiscountParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    pharmacyNetworkId?: number,
    promocode?: string,
    bonuses?: number
}

export interface IOrdersCalculateParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    pharmacyNetworkId?: number,
    promocode?: string,
    bonuses?: number
}

export interface IOrdersCancelParams {
    orderId: number,
    reasonId?: number,
    comment?: string
}

export interface IOrdersCommitAddableParams {
    orderId: number,
    cart: Array<IApiCartRequestItem>
}

export interface IOrdersCompleteParams {
    orderId: number
}

export interface IOrdersCountParams {
    search?: IApiOrderSearch
}

export interface IOrdersCreateParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    cartId?: string,
    source?: number,
    pharmacyNetworkId?: number,
    deliveryInfo?: IApiDeliveryInfo,
    courierInfo?: IApiCourierInfo,
    paymentInfo?: IApiPaymentInfo,
    promocode?: string,
    bonuses?: number,
    isPartial?: boolean
}

export interface IOrdersDeleteParams {
    orderId: number
}

export interface IOrdersDeliveryCountParams {
    cart: Array<IApiCartRequestItem>,
    cityId: number,
    pharmacyIds?: Array<string>
}

export interface IOrdersDeliveryListParams {
    cart: Array<IApiCartRequestItem>,
    cityId: number,
    pharmacyIds?: Array<string>
}

export interface IOrdersDeliveryTypeListParams {
    pharmacyId: number,
    cart: Array<IApiCartRequestItem>,
    city: string
}

export interface IOrdersFollowupParams {
    orderId: number,
    reasonId: number,
    comment?: string
}

export interface IOrdersGetByIdParams {
    orderId: number
}

export interface IOrdersGetParams {
    search?: IApiOrderSearch,
    page?: number,
    pageSize?: number
}

export interface IOrdersGetSharedParams {
    sharedUUID: string
}

export interface IOrdersPharmacyCountParams {
    cart: Array<IApiCartRequestItem>,
    cityId: number,
    pharmacyIds?: Array<number>,
    deliveryType?: number
}

export interface IOrdersPharmacyListParams {
    cart: Array<IApiCartRequestItem>,
    cityId: number,
    pharmacyIds?: Array<string>,
    deliveryType?: number,
    multiPickup?: boolean
}

export interface IOrdersRecreateParams {
    orderId: number,
    cityId: number,
    options?: IApiCartOptions
}

export interface IOrdersShareParams {
    orderId: number
}

export interface IOrdersUserUpdateCancelledParams {
    orderId: number,
    isCompleted: boolean,
    comment?: string
}

export interface IPartnersGetByIdParams {
    id: number,
    cityId: number
}

export interface IPartnersGetParams {
    cityId?: number
}

export interface IPartnersLoyaltyProgramRulesParams {
    id: number
}

export interface IPharmaciesClusterParams {
    search: IApiPharmacySearch,
    view: IApiMapView
}

export interface IPharmaciesCountParams {
    search: IApiPharmacySearch
}

export interface IPharmaciesGetByIdParams {
    pharmacyId: number,
    cityId: number
}

export interface IPharmaciesGetParams {
    search: IApiPharmacySearch,
    view?: IApiMapView,
    page?: number,
    pageSize?: number
}

export interface IPharmaciesStatisticsParams {
    search: IApiPharmacySearch,
    view?: IApiMapView
}

export interface IPrescriptionsGetByIdParams {
    prescriptionId: number
}

export interface IPrescriptionsGetParams {
    page?: number,
    pageSize?: number
}

export interface IProductsAddReviewParams {
    productId: number,
    name: string,
    rating: number,
    content: string
}

export interface IProductsAnalogsParams {
    search: IApiProductSearch,
    page?: number,
    pageSize?: number
}

export interface IProductsAutocompleteParams {
    cityId: number,
    query: string,
    cartId?: string
}

export interface IProductsBannersParams {
    search: IApiProductSearch
}

export interface IProductsBestPricesParams {
    cityId: number,
    count?: number
}

export interface IProductsCountParams {
    search: IApiProductSearch
}

export interface IProductsFiltersParams {
    search: IApiProductSearch,
    withoutLists?: boolean
}

export interface IProductsGetByBarcodeParams {
    barcode: string,
    cityId?: number,
    pharmacyIds?: Array<string>
}

export interface IProductsGetByIdParams {
    productId: number,
    cityId?: number,
    cartId?: string
}

export interface IProductsGetParams {
    search: IApiProductSearch,
    page?: number,
    pageSize?: number
}

export interface IProductsInstructionsParams {
    search: IApiProductSearch
}

export interface IProductsMainPropertiesParams {
    search: IApiProductSearch
}

export interface IProductsPartnerPricesParams {
    cart: Array<IApiCartRequestItem>,
    cityId: number,
    deliveryType: number
}

export interface IProductsPopularByCategoryParams {
    cityId: number,
    categoryId: number,
    count?: number
}

export interface IProductsPricesByCartParams {
    cityId: number,
    cart: Array<IApiCartRequestItem>,
    cartId?: string
}

export interface IProductsPricesCountParams {
    productId: number,
    cityId: number,
    pharmacyIds?: Array<string>
}

export interface IProductsPricesHistoryParams {
    productId: number,
    cityId: number
}

export interface IProductsPropertiesByValuesParams {
    valueIds: Array<number>
}

export interface IProductsPropertiesParams {
    search: IApiProductSearch
}

export interface IProductsPropertyValuesParams {
    search: IApiProductSearch,
    propertyId: number
}

export interface IProductsRelatedParams {
    productIds: Array<number>,
    cityId: number,
    count?: number
}

export interface IProductsReviewsParams {
    productId: number,
    cityId: number,
    pharmacyIds?: Array<number>
}

export interface IProductsUsefulParams {
    cityId: number,
    count?: number,
    cartId?: string
}

export interface IProfileCountFavoriteProductsParams {
    search: IApiProfileFavoriteProductSearch
}

export interface IProfileCountOrderProductsParams {
    search: IApiProfileOrderProductSearch
}

export interface IProfileDeleteParams {
    comment?: string
}

export interface IProfileFavoriteProductsParams {
    cityId?: number,
    search: IApiProfileFavoriteProductSearch,
    page?: number,
    pageSize?: number
}

export interface IProfileFavoritesAddParams {
    id: number,
    pType: string
}

export interface IProfileFavoritesRemoveParams {
    id: number,
    pType: string
}

export interface IProfileOrderProductsParams {
    search: IApiProfileOrderProductSearch,
    page?: number,
    pageSize?: number
}

export interface IProfileReferralResponse {
    title: string,
    shareText: string,
    rules: string,
    promocode: string
}

export interface IProfileTrackDeviceParams {
    appsFlyerDeviceId: string,
    idfa?: string,
    advertisingId?: string
}

export interface IProfileTrackDeviceTokenParams {
    idfa?: string,
    advertisingId?: string,
    fcmToken?: string,
    appMetricaDeviceId?: string,
    deeplinkUrl?: string
}

export interface IProfileUpdateParams {
    profile: IApiProfileUpdate
}

export interface IPromoBannersParams {
    bannerType?: string
}

export interface IPromoBrandsParams {
    categoryId: number
}

export interface IPromoProductsOfTheDayParams {
    cityId: number,
    categoryId?: number
}

export interface IPromoPromocodeBannerResponse {
    title: string,
    shortTitle: string,
    rules: string,
    promocode: string
}

export interface IRemindersAddParams {
    formData: IApiReminderForm
}

export interface IRemindersDeleteParams {
    id: number
}

export interface IRemindersGetByIdParams {
    id: number
}

export interface IRemindersScheduleAutocompleteParams {
    frequency?: number
}

export interface IRemindersUpdateParams {
    formData: IApiReminderForm
}

export interface IRemindersUpdateProgressParams {
    formData: IApiReminderProgressForm
}

export interface IRemindersValidateParams {
    formData: IApiReminderForm
}

export interface IReviewsAddCommentParams {
    formData: IApiReviewCommentForm
}

export interface IReviewsAddParams {
    formData: IApiReviewForm
}

export interface IReviewsComplaintCommentParams {
    complaint: IApiReviewCommentComplaint
}

export interface IReviewsComplaintParams {
    complaint: IApiReviewComplaint
}

export interface IReviewsCountParams {
    search: IApiProductSearch
}

export interface IReviewsDislikeCommentParams {
    id: number
}

export interface IReviewsDislikeParams {
    id: number
}

export interface IReviewsGetParams {
    search: IApiProductSearch,
    page?: number,
    pageSize?: number
}

export interface IReviewsLikeCommentParams {
    id: number
}

export interface IReviewsLikeParams {
    id: number
}

export interface IReviewsStatisticsParams {
    search: IApiProductSearch
}

export interface IReviewsValidateCommentParams {
    formData: IApiReviewCommentForm
}

export interface IReviewsValidateParams {
    formData: IApiReviewForm
}

export interface ISiteFAQParams {
    cityId: number
}

export interface ISiteGetKitByIdParams {
    id: number,
    cityId: number,
    cartId?: string
}

export interface ISiteGetKitByUrlParams {
    url: string,
    cityId: number,
    cartId?: string
}

export interface ISiteGetKitsByProducerParams {
    cityId?: number,
    producerId: number
}

export interface ISiteGetKitsParams {
    cityId?: number
}

export interface ISiteGetPartnerByIdParams {
    id: number,
    cityId: number
}

export interface ISiteGetPartnerByUrlParams {
    url: string,
    cityId: number
}

export interface ISiteGetPartnersParams {
    cityId?: number
}

export interface ISiteSendFeedbackParams {
    formData: IApiFeedback,
    formName: string,
    cityId?: number
}

export const factory = (send) => ({
    analytics: {
        addToCart(params: IAnalyticsAddToCartParams): Promise<boolean> {
            return send('analytics.AddToCart', params)
        },
        checkout(params: IAnalyticsCheckoutParams): Promise<boolean> {
            return send('analytics.Checkout', params)
        },
        newCart(params: IAnalyticsNewCartParams): Promise<boolean> {
            return send('analytics.NewCart', params)
        },
        order(params: IAnalyticsOrderParams): Promise<boolean> {
            return send('analytics.Order', params)
        },
        productView(params: IAnalyticsProductViewParams): Promise<boolean> {
            return send('analytics.ProductView', params)
        },
        removeFromCart(params: IAnalyticsRemoveFromCartParams): Promise<boolean> {
            return send('analytics.RemoveFromCart', params)
        }
    },
    app: {
        checkCaptcha(params: IAppCheckCaptchaParams): Promise<boolean> {
            return send('app.CheckCaptcha', params)
        },
        lastModified(params: IAppLastModifiedParams): Promise<IApiLastStatus> {
            return send('app.LastModified', params)
        },
        settings(): Promise<IApiAppSettings> {
            return send('app.Settings')
        }
    },
    article: {
        addComment(params: IArticleAddCommentParams): Promise<IApiArticleComment> {
            return send('article.AddComment', params)
        },
        authorByAlias(params: IArticleAuthorByAliasParams): Promise<IApiArticleAuthor> {
            return send('article.AuthorByAlias', params)
        },
        authorForInstruction(): Promise<IApiArticleAuthorSummary> {
            return send('article.AuthorForInstruction')
        },
        comments(params: IArticleCommentsParams): Promise<Array<IApiArticleComment>> {
            return send('article.Comments', params)
        },
        commentsCount(params: IArticleCommentsCountParams): Promise<IApiArticleCommentsCount> {
            return send('article.CommentsCount', params)
        },
        complaintComment(params: IArticleComplaintCommentParams): Promise<void> {
            return send('article.ComplaintComment', params)
        },
        count(params: IArticleCountParams): Promise<number> {
            return send('article.Count', params)
        },
        dislikeComment(params: IArticleDislikeCommentParams): Promise<IApiArticleComment> {
            return send('article.DislikeComment', params)
        },
        get(params: IArticleGetParams): Promise<Array<IApiArticle>> {
            return send('article.Get', params)
        },
        getByAlias(params: IArticleGetByAliasParams): Promise<IApiArticle> {
            return send('article.GetByAlias', params)
        },
        getByProduct(params: IArticleGetByProductParams): Promise<Array<IApiArticle>> {
            return send('article.GetByProduct', params)
        },
        likeComment(params: IArticleLikeCommentParams): Promise<IApiArticleComment> {
            return send('article.LikeComment', params)
        },
        rate(params: IArticleRateParams): Promise<void> {
            return send('article.Rate', params)
        },
        rubrics(): Promise<Array<IApiArticleRubric>> {
            return send('article.Rubrics')
        },
        tags(): Promise<Array<IApiArticleTag>> {
            return send('article.Tags')
        },
        validateComment(params: IArticleValidateCommentParams): Promise<Array<IFieldError>> {
            return send('article.ValidateComment', params)
        }
    },
    auth: {
        changePassword(params: IAuthChangePasswordParams): Promise<boolean> {
            return send('auth.ChangePassword', params)
        },
        getCode(params: IAuthGetCodeParams): Promise<boolean> {
            return send('auth.GetCode', params)
        },
        getCodeByCall(params: IAuthGetCodeByCallParams): Promise<boolean> {
            return send('auth.GetCodeByCall', params)
        },
        login(params: IAuthLoginParams): Promise<string> {
            return send('auth.Login', params)
        },
        loginByJWT(params: IAuthLoginByJWTParams): Promise<string> {
            return send('auth.LoginByJWT', params)
        },
        loginByYandexAccessToken(params: IAuthLoginByYandexAccessTokenParams): Promise<IApiLoginByJWTResponse> {
            return send('auth.LoginByYandexAccessToken', params)
        },
        loginByYandexJWT(params: IAuthLoginByYandexJWTParams): Promise<IApiLoginByJWTResponse> {
            return send('auth.LoginByYandexJWT', params)
        },
        register(params: IAuthRegisterParams): Promise<string> {
            return send('auth.Register', params)
        },
        remindPassword(params: IAuthRemindPasswordParams): Promise<boolean> {
            return send('auth.RemindPassword', params)
        },
        validateRegister(params: IAuthValidateRegisterParams): Promise<IApiAuthValidateRegister> {
            return send('auth.ValidateRegister', params)
        }
    },
    cart: {
        add(params: ICartAddParams): Promise<IApiUserCartResponse> {
            return send('cart.Add', params)
        },
        addBulk(params: ICartAddBulkParams): Promise<IApiUserCartResponse> {
            return send('cart.AddBulk', params)
        },
        analogs(params: ICartAnalogsParams): Promise<Array<IApiCartAnalogItem>> {
            return send('cart.Analogs', params)
        },
        destroy(params: ICartDestroyParams): Promise<IApiUserCartResponse> {
            return send('cart.Destroy', params)
        },
        get(params: ICartGetParams): Promise<IApiUserCartResponse> {
            return send('cart.Get', params)
        },
        refresh(params: ICartRefreshParams): Promise<IApiUserCartResponse> {
            return send('cart.Refresh', params)
        },
        remove(params: ICartRemoveParams): Promise<IApiUserCartResponse> {
            return send('cart.Remove', params)
        },
        replace(params: ICartReplaceParams): Promise<IApiUserCartResponse> {
            return send('cart.Replace', params)
        },
        setContext(params: ICartSetContextParams): Promise<IApiUserCartResponse> {
            return send('cart.SetContext', params)
        },
        setShared(params: ICartSetSharedParams): Promise<IApiUserCartResponse> {
            return send('cart.SetShared', params)
        },
        share(params: ICartShareParams): Promise<IApiCartShare> {
            return send('cart.Share', params)
        }
    },
    cashback: {
        about(): Promise<Array<IApiCashbackTooltip>> {
            return send('cashback.About')
        },
        categories(params: ICashbackCategoriesParams): Promise<Array<IApiCashbackCategory>> {
            return send('cashback.Categories', params)
        },
        count(params: ICashbackCountParams): Promise<number> {
            return send('cashback.Count', params)
        },
        countReceipts(): Promise<number> {
            return send('cashback.CountReceipts')
        },
        countTransactions(): Promise<number> {
            return send('cashback.CountTransactions')
        },
        counters(): Promise<IApiCashbackCounters> {
            return send('cashback.Counters')
        },
        get(params: ICashbackGetParams): Promise<Array<IApiCashbackCampaignSummary>> {
            return send('cashback.Get', params)
        },
        getById(params: ICashbackGetByIdParams): Promise<IApiCashbackCampaign> {
            return send('cashback.GetById', params)
        },
        getReceipts(params: ICashbackGetReceiptsParams): Promise<Array<IApiCashbackReceipt>> {
            return send('cashback.GetReceipts', params)
        },
        getTransactions(): Promise<Array<IApiCashbackTransaction>> {
            return send('cashback.GetTransactions')
        },
        payout(params: ICashbackPayoutParams): Promise<number> {
            return send('cashback.Payout', params)
        },
        receiptById(params: ICashbackReceiptByIdParams): Promise<IApiFullCashbackReceipt> {
            return send('cashback.ReceiptById', params)
        },
        resetCounters(): Promise<void> {
            return send('cashback.ResetCounters')
        },
        rules(): Promise<string> {
            return send('cashback.Rules')
        },
        saveReceipt(params: ICashbackSaveReceiptParams): Promise<number> {
            return send('cashback.SaveReceipt', params)
        },
        tooltips(): Promise<Array<IApiCashbackTooltip>> {
            return send('cashback.Tooltips')
        },
        validatePayout(params: ICashbackValidatePayoutParams): Promise<Array<IFieldError>> {
            return send('cashback.ValidatePayout', params)
        },
        validateReceipt(params: ICashbackValidateReceiptParams): Promise<Array<IFieldError>> {
            return send('cashback.ValidateReceipt', params)
        }
    },
    catalogue: {
        alphabeticalIndex(params: ICatalogueAlphabeticalIndexParams): Promise<Array<IApiValue>> {
            return send('catalogue.AlphabeticalIndex', params)
        },
        alphabeticalList(params: ICatalogueAlphabeticalListParams): Promise<Array<IApiValue>> {
            return send('catalogue.AlphabeticalList', params)
        },
        alphabeticalListGrouped(params: ICatalogueAlphabeticalListGroupedParams): Promise<Array<IApiAlphabeticalGroup>> {
            return send('catalogue.AlphabeticalListGrouped', params)
        },
        categories(params: ICatalogueCategoriesParams): Promise<Array<IApiCategory>> {
            return send('catalogue.Categories', params)
        },
        categoryBranch(params: ICatalogueCategoryBranchParams): Promise<IApiCategory> {
            return send('catalogue.CategoryBranch', params)
        },
        cities(): Promise<Array<IApiCity>> {
            return send('catalogue.Cities')
        },
        citiesByQuery(params: ICatalogueCitiesByQueryParams): Promise<Array<IApiCity>> {
            return send('catalogue.CitiesByQuery', params)
        },
        cityByAlias(params: ICatalogueCityByAliasParams): Promise<IApiCity> {
            return send('catalogue.CityByAlias', params)
        },
        cityById(params: ICatalogueCityByIdParams): Promise<IApiCity> {
            return send('catalogue.CityById', params)
        },
        cityByIp(params: ICatalogueCityByIpParams): Promise<IApiCity> {
            return send('catalogue.CityByIp', params)
        },
        cityByLatLon(params: ICatalogueCityByLatLonParams): Promise<IApiCity> {
            return send('catalogue.CityByLatLon', params)
        },
        count(params: ICatalogueCountParams): Promise<number> {
            return send('catalogue.Count', params)
        },
        geoObjectById(params: ICatalogueGeoObjectByIdParams): Promise<IApiGeoObject> {
            return send('catalogue.GeoObjectById', params)
        },
        geoObjects(params: ICatalogueGeoObjectsParams): Promise<Array<IApiGeoObject>> {
            return send('catalogue.GeoObjects', params)
        },
        geoObjectsByQuery(params: ICatalogueGeoObjectsByQueryParams): Promise<Array<IApiGeoObjectAutocompleteItem>> {
            return send('catalogue.GeoObjectsByQuery', params)
        },
        get(params: ICatalogueGetParams): Promise<Array<IApiCatalogueItem>> {
            return send('catalogue.Get', params)
        },
        mainPage(params: ICatalogueMainPageParams): Promise<Array<IApiMainPageGroup>> {
            return send('catalogue.MainPage', params)
        },
        pharmacyNetworks(params: ICataloguePharmacyNetworksParams): Promise<Array<IApiPharmacyNetwork>> {
            return send('catalogue.PharmacyNetworks', params)
        },
        stations(params: ICatalogueStationsParams): Promise<Array<IApiStation>> {
            return send('catalogue.Stations', params)
        },
        suggestAddresses(params: ICatalogueSuggestAddressesParams): Promise<Array<IApiSuggestAddress>> {
            return send('catalogue.SuggestAddresses', params)
        }
    },
    delivery: {
        addressHistory(params: IDeliveryAddressHistoryParams): Promise<Array<IApiDeliveryAddress>> {
            return send('delivery.AddressHistory', params)
        },
        calculate(params: IDeliveryCalculateParams): Promise<IApiDeliveryCart> {
            return send('delivery.Calculate', params)
        },
        calculateCourier(params: IDeliveryCalculateCourierParams): Promise<IApiDeliveryCourierCart> {
            return send('delivery.CalculateCourier', params)
        },
        courierList(params: IDeliveryCourierListParams): Promise<Array<IApiDeliveryCourier>> {
            return send('delivery.CourierList', params)
        },
        list(params: IDeliveryListParams): Promise<Array<IApiDeliveryOption>> {
            return send('delivery.List', params)
        },
        suggestAddresses(params: IDeliverySuggestAddressesParams): Promise<Array<IApiSuggestAddressDelivery>> {
            return send('delivery.SuggestAddresses', params)
        }
    },
    discount: {
        counters(): Promise<IApiDiscountCounters> {
            return send('discount.Counters')
        },
        deleteCard(params: IDiscountDeleteCardParams): Promise<boolean> {
            return send('discount.DeleteCard', params)
        },
        getCards(): Promise<Array<IApiDiscountCard>> {
            return send('discount.GetCards')
        },
        partners(params: IDiscountPartnersParams): Promise<Array<IApiPartnerSummary>> {
            return send('discount.Partners', params)
        },
        saveCard(params: IDiscountSaveCardParams): Promise<IDiscountSaveCardResponse> {
            return send('discount.SaveCard', params)
        },
        transactions(params: IDiscountTransactionsParams): Promise<Array<IApiDiscountTransaction>> {
            return send('discount.Transactions', params)
        },
        validateCard(params: IDiscountValidateCardParams): Promise<Array<IFieldError>> {
            return send('discount.ValidateCard', params)
        }
    },
    map: {
        areaByIp(params: IMapAreaByIpParams): Promise<IApiMapArea> {
            return send('map.AreaByIp', params)
        },
        cluster(params: IMapClusterParams): Promise<IApiMapClusterResponse> {
            return send('map.Cluster', params)
        },
        pharmacies(params: IMapPharmaciesParams): Promise<IApiMapPharmaciesResponse> {
            return send('map.Pharmacies', params)
        },
        pharmaciesByPrice(params: IMapPharmaciesByPriceParams): Promise<IApiMapPharmaciesResponse> {
            return send('map.PharmaciesByPrice', params)
        },
        postal(params: IMapPostalParams): Promise<IApiMapPostal> {
            return send('map.Postal', params)
        },
        statistics(params: IMapStatisticsParams): Promise<IApiMapStatistics> {
            return send('map.Statistics', params)
        }
    },
    meta: {
        address(params: IMetaAddressParams): Promise<string> {
            return send('meta.Address', params)
        },
        get(params: IMetaGetParams): Promise<IApiMetaDetail> {
            return send('meta.Get', params)
        }
    },
    orders: {
        addableProducts(params: IOrdersAddableProductsParams): Promise<Array<IApiProductSummary>> {
            return send('orders.AddableProducts', params)
        },
        calculate(params: IOrdersCalculateParams): Promise<IApiCart> {
            return send('orders.Calculate', params)
        },
        calculateAddable(params: IOrdersCalculateAddableParams): Promise<IApiCart> {
            return send('orders.CalculateAddable', params)
        },
        calculateDiscount(params: IOrdersCalculateDiscountParams): Promise<IApiCartDiscount> {
            return send('orders.CalculateDiscount', params)
        },
        cancel(params: IOrdersCancelParams): Promise<boolean> {
            return send('orders.Cancel', params)
        },
        cancelReasons(): Promise<Array<IApiEntity>> {
            return send('orders.CancelReasons')
        },
        commitAddable(params: IOrdersCommitAddableParams): Promise<boolean> {
            return send('orders.CommitAddable', params)
        },
        complete(params: IOrdersCompleteParams): Promise<boolean> {
            return send('orders.Complete', params)
        },
        count(params: IOrdersCountParams): Promise<number> {
            return send('orders.Count', params)
        },
        countActive(): Promise<number> {
            return send('orders.CountActive')
        },
        countCompleted(): Promise<number> {
            return send('orders.CountCompleted')
        },
        counters(): Promise<IApiOrderCounters> {
            return send('orders.Counters')
        },
        create(params: IOrdersCreateParams): Promise<IApiOrder> {
            return send('orders.Create', params)
        },
        delete(params: IOrdersDeleteParams): Promise<boolean> {
            return send('orders.Delete', params)
        },
        deliveryCount(params: IOrdersDeliveryCountParams): Promise<IApiProviderCount> {
            return send('orders.DeliveryCount', params)
        },
        deliveryList(params: IOrdersDeliveryListParams): Promise<Array<IApiDeliveryListItem>> {
            return send('orders.DeliveryList', params)
        },
        deliveryTypeList(params: IOrdersDeliveryTypeListParams): Promise<IApiDeliveryTypeList> {
            return send('orders.DeliveryTypeList', params)
        },
        followup(params: IOrdersFollowupParams): Promise<boolean> {
            return send('orders.Followup', params)
        },
        get(params: IOrdersGetParams): Promise<Array<IApiOrderSummary>> {
            return send('orders.Get', params)
        },
        getById(params: IOrdersGetByIdParams): Promise<IApiOrder> {
            return send('orders.GetById', params)
        },
        getShared(params: IOrdersGetSharedParams): Promise<IApiOrder> {
            return send('orders.GetShared', params)
        },
        pharmacyCount(params: IOrdersPharmacyCountParams): Promise<IApiPharmacyCount> {
            return send('orders.PharmacyCount', params)
        },
        pharmacyList(params: IOrdersPharmacyListParams): Promise<Array<IApiMapPharmacyPrice>> {
            return send('orders.PharmacyList', params)
        },
        recreate(params: IOrdersRecreateParams): Promise<IApiUserCartResponse> {
            return send('orders.Recreate', params)
        },
        share(params: IOrdersShareParams): Promise<IApiOrderShare> {
            return send('orders.Share', params)
        },
        statuses(): Promise<Array<IApiOrderStatus>> {
            return send('orders.Statuses')
        },
        userUpdateCancelled(params: IOrdersUserUpdateCancelledParams): Promise<boolean> {
            return send('orders.UserUpdateCancelled', params)
        }
    },
    partners: {
        get(params: IPartnersGetParams): Promise<Array<IApiPartnerSummary>> {
            return send('partners.Get', params)
        },
        getById(params: IPartnersGetByIdParams): Promise<IApiPartner> {
            return send('partners.GetById', params)
        },
        loyaltyProgramRules(params: IPartnersLoyaltyProgramRulesParams): Promise<IApiPartnerLoyaltyProgramRules> {
            return send('partners.LoyaltyProgramRules', params)
        }
    },
    pharmacies: {
        cluster(params: IPharmaciesClusterParams): Promise<IApiPharmacyClusterResponse> {
            return send('pharmacies.Cluster', params)
        },
        count(params: IPharmaciesCountParams): Promise<number> {
            return send('pharmacies.Count', params)
        },
        get(params: IPharmaciesGetParams): Promise<Array<IApiPharmacy>> {
            return send('pharmacies.Get', params)
        },
        getById(params: IPharmaciesGetByIdParams): Promise<IApiPharmacyCard> {
            return send('pharmacies.GetById', params)
        },
        statistics(params: IPharmaciesStatisticsParams): Promise<IApiPharmacyStatistics> {
            return send('pharmacies.Statistics', params)
        }
    },
    prescriptions: {
        count(): Promise<number> {
            return send('prescriptions.Count')
        },
        get(params: IPrescriptionsGetParams): Promise<Array<IApiPrescriptionSummary>> {
            return send('prescriptions.Get', params)
        },
        getById(params: IPrescriptionsGetByIdParams): Promise<IApiPrescription> {
            return send('prescriptions.GetById', params)
        }
    },
    products: {
        addReview(params: IProductsAddReviewParams): Promise<boolean> {
            return send('products.AddReview', params)
        },
        analogs(params: IProductsAnalogsParams): Promise<Array<IApiProductSummary>> {
            return send('products.Analogs', params)
        },
        autocomplete(params: IProductsAutocompleteParams): Promise<IApiProductAutocompleteInfo> {
            return send('products.Autocomplete', params)
        },
        banners(params: IProductsBannersParams): Promise<Array<IApiProductBanner>> {
            return send('products.Banners', params)
        },
        bestPrices(params: IProductsBestPricesParams): Promise<Array<IApiProductSummary>> {
            return send('products.BestPrices', params)
        },
        count(params: IProductsCountParams): Promise<number> {
            return send('products.Count', params)
        },
        filters(params: IProductsFiltersParams): Promise<IApiProductFilters> {
            return send('products.Filters', params)
        },
        get(params: IProductsGetParams): Promise<Array<IApiProductSummary>> {
            return send('products.Get', params)
        },
        getByBarcode(params: IProductsGetByBarcodeParams): Promise<IApiProduct> {
            return send('products.GetByBarcode', params)
        },
        getById(params: IProductsGetByIdParams): Promise<IApiProduct> {
            return send('products.GetById', params)
        },
        instructionFields(): Promise<IApiInstructionFields> {
            return send('products.InstructionFields')
        },
        instructions(params: IProductsInstructionsParams): Promise<Array<IApiSEOInstruction>> {
            return send('products.Instructions', params)
        },
        mainProperties(params: IProductsMainPropertiesParams): Promise<Array<IApiPropertyValue>> {
            return send('products.MainProperties', params)
        },
        partnerPrices(params: IProductsPartnerPricesParams): Promise<Array<IApiProductPartnerPrice>> {
            return send('products.PartnerPrices', params)
        },
        popularByCategory(params: IProductsPopularByCategoryParams): Promise<Array<IApiProductSummary>> {
            return send('products.PopularByCategory', params)
        },
        pricesByCart(params: IProductsPricesByCartParams): Promise<Array<IApiProductPrice>> {
            return send('products.PricesByCart', params)
        },
        pricesCount(params: IProductsPricesCountParams): Promise<number> {
            return send('products.PricesCount', params)
        },
        pricesHistory(params: IProductsPricesHistoryParams): Promise<Array<IApiProductPriceHistory>> {
            return send('products.PricesHistory', params)
        },
        properties(params: IProductsPropertiesParams): Promise<Array<IApiProperty>> {
            return send('products.Properties', params)
        },
        propertiesByValues(params: IProductsPropertiesByValuesParams): Promise<Array<IApiProperty>> {
            return send('products.PropertiesByValues', params)
        },
        propertyValues(params: IProductsPropertyValuesParams): Promise<Array<IApiPropertyValue>> {
            return send('products.PropertyValues', params)
        },
        related(params: IProductsRelatedParams): Promise<Array<IApiProductSummary>> {
            return send('products.Related', params)
        },
        reviews(params: IProductsReviewsParams): Promise<Array<IApiProductReview>> {
            return send('products.Reviews', params)
        },
        useful(params: IProductsUsefulParams): Promise<Array<IApiProductSummary>> {
            return send('products.Useful', params)
        }
    },
    profile: {
        countFavoriteProducts(params: IProfileCountFavoriteProductsParams): Promise<number> {
            return send('profile.CountFavoriteProducts', params)
        },
        countOrderProducts(params: IProfileCountOrderProductsParams): Promise<number> {
            return send('profile.CountOrderProducts', params)
        },
        delete(params: IProfileDeleteParams): Promise<boolean> {
            return send('profile.Delete', params)
        },
        favoritePharmacies(): Promise<Array<IApiPharmacy>> {
            return send('profile.FavoritePharmacies')
        },
        favoriteProductIds(): Promise<Array<number>> {
            return send('profile.FavoriteProductIds')
        },
        favoriteProducts(params: IProfileFavoriteProductsParams): Promise<Array<IApiProductSummary>> {
            return send('profile.FavoriteProducts', params)
        },
        favoritesAdd(params: IProfileFavoritesAddParams): Promise<boolean> {
            return send('profile.FavoritesAdd', params)
        },
        favoritesRemove(params: IProfileFavoritesRemoveParams): Promise<boolean> {
            return send('profile.FavoritesRemove', params)
        },
        get(): Promise<IApiProfile> {
            return send('profile.Get')
        },
        licence(): Promise<string> {
            return send('profile.Licence')
        },
        orderProducts(params: IProfileOrderProductsParams): Promise<Array<IApiProductSummary>> {
            return send('profile.OrderProducts', params)
        },
        privacyAgreement(): Promise<string> {
            return send('profile.PrivacyAgreement')
        },
        referral(): Promise<IProfileReferralResponse> {
            return send('profile.Referral')
        },
        trackDevice(params: IProfileTrackDeviceParams): Promise<boolean> {
            return send('profile.TrackDevice', params)
        },
        trackDeviceToken(params: IProfileTrackDeviceTokenParams): Promise<boolean> {
            return send('profile.TrackDeviceToken', params)
        },
        update(params: IProfileUpdateParams): Promise<boolean> {
            return send('profile.Update', params)
        }
    },
    promo: {
        banners(params: IPromoBannersParams): Promise<Array<IApiBanner>> {
            return send('promo.Banners', params)
        },
        brands(params: IPromoBrandsParams): Promise<Array<IApiBrand>> {
            return send('promo.Brands', params)
        },
        mainBrands(): Promise<Array<IApiMainBrand>> {
            return send('promo.MainBrands')
        },
        mainPartners(): Promise<Array<IApiMainPartner>> {
            return send('promo.MainPartners')
        },
        popularQueries(): Promise<Array<IApiPopularQuery>> {
            return send('promo.PopularQueries')
        },
        productsOfTheDay(params: IPromoProductsOfTheDayParams): Promise<Array<IApiProductOfTheDay>> {
            return send('promo.ProductsOfTheDay', params)
        },
        promocodeBanner(): Promise<IPromoPromocodeBannerResponse> {
            return send('promo.PromocodeBanner')
        },
        searchProducts(): Promise<Array<IApiPromoItem>> {
            return send('promo.SearchProducts')
        },
        searchQueries(): Promise<Array<IApiPromoItem>> {
            return send('promo.SearchQueries')
        }
    },
    reminders: {
        add(params: IRemindersAddParams): Promise<IApiProductReminder> {
            return send('reminders.Add', params)
        },
        delete(params: IRemindersDeleteParams): Promise<boolean> {
            return send('reminders.Delete', params)
        },
        get(): Promise<Array<IApiProductReminderSummary>> {
            return send('reminders.Get')
        },
        getById(params: IRemindersGetByIdParams): Promise<IApiProductReminder> {
            return send('reminders.GetById', params)
        },
        medicationRules(): Promise<Array<IApiValue>> {
            return send('reminders.MedicationRules')
        },
        scheduleAutocomplete(params: IRemindersScheduleAutocompleteParams): Promise<Array<IApiReminderScheduleItem>> {
            return send('reminders.ScheduleAutocomplete', params)
        },
        update(params: IRemindersUpdateParams): Promise<IApiProductReminder> {
            return send('reminders.Update', params)
        },
        updateProgress(params: IRemindersUpdateProgressParams): Promise<IApiProductReminder> {
            return send('reminders.UpdateProgress', params)
        },
        validate(params: IRemindersValidateParams): Promise<Array<IFieldError>> {
            return send('reminders.Validate', params)
        }
    },
    reviews: {
        add(params: IReviewsAddParams): Promise<IApiProductReview> {
            return send('reviews.Add', params)
        },
        addComment(params: IReviewsAddCommentParams): Promise<IApiProductReviewComment> {
            return send('reviews.AddComment', params)
        },
        complaint(params: IReviewsComplaintParams): Promise<void> {
            return send('reviews.Complaint', params)
        },
        complaintComment(params: IReviewsComplaintCommentParams): Promise<void> {
            return send('reviews.ComplaintComment', params)
        },
        count(params: IReviewsCountParams): Promise<number> {
            return send('reviews.Count', params)
        },
        dislike(params: IReviewsDislikeParams): Promise<IApiProductReviewRating> {
            return send('reviews.Dislike', params)
        },
        dislikeComment(params: IReviewsDislikeCommentParams): Promise<IApiProductReviewCommentRating> {
            return send('reviews.DislikeComment', params)
        },
        get(params: IReviewsGetParams): Promise<Array<IApiProductReview>> {
            return send('reviews.Get', params)
        },
        like(params: IReviewsLikeParams): Promise<IApiProductReviewRating> {
            return send('reviews.Like', params)
        },
        likeComment(params: IReviewsLikeCommentParams): Promise<IApiProductReviewCommentRating> {
            return send('reviews.LikeComment', params)
        },
        statistics(params: IReviewsStatisticsParams): Promise<IApiProductReviewStatistics> {
            return send('reviews.Statistics', params)
        },
        validate(params: IReviewsValidateParams): Promise<Array<IFieldError>> {
            return send('reviews.Validate', params)
        },
        validateComment(params: IReviewsValidateCommentParams): Promise<Array<IFieldError>> {
            return send('reviews.ValidateComment', params)
        }
    },
    site: {
        businessCounters(): Promise<IApiSiteBusinessCounters> {
            return send('site.BusinessCounters')
        },
        counters(): Promise<IApiSiteCounters> {
            return send('site.Counters')
        },
        deliveryNotice(): Promise<string> {
            return send('site.DeliveryNotice')
        },
        distanceTradingRules(): Promise<string> {
            return send('site.DistanceTradingRules')
        },
        FAQ(params: ISiteFAQParams): Promise<Array<IApiFAQCategory>> {
            return send('site.FAQ', params)
        },
        getKitById(params: ISiteGetKitByIdParams): Promise<IApiKit> {
            return send('site.GetKitById', params)
        },
        getKitByUrl(params: ISiteGetKitByUrlParams): Promise<IApiKit> {
            return send('site.GetKitByUrl', params)
        },
        getKits(params: ISiteGetKitsParams): Promise<Array<IApiKitSummary>> {
            return send('site.GetKits', params)
        },
        getKitsByProducer(params: ISiteGetKitsByProducerParams): Promise<Array<IApiKitSummary>> {
            return send('site.GetKitsByProducer', params)
        },
        getPartnerById(params: ISiteGetPartnerByIdParams): Promise<IApiKit> {
            return send('site.GetPartnerById', params)
        },
        getPartnerByUrl(params: ISiteGetPartnerByUrlParams): Promise<IApiKit> {
            return send('site.GetPartnerByUrl', params)
        },
        getPartners(params: ISiteGetPartnersParams): Promise<Array<IApiKitSummary>> {
            return send('site.GetPartners', params)
        },
        holidaysNotice(): Promise<string> {
            return send('site.HolidaysNotice')
        },
        legalEntities(): Promise<Array<IApiLegalEntity>> {
            return send('site.LegalEntities')
        },
        legalPartners(): Promise<Array<IApiLegalPartner>> {
            return send('site.LegalPartners')
        },
        officeBranches(): Promise<Array<IApiOfficeBranch>> {
            return send('site.OfficeBranches')
        },
        readingLinks(): Promise<Array<IApiReadingLink>> {
            return send('site.ReadingLinks')
        },
        referralProgramRules(): Promise<string> {
            return send('site.ReferralProgramRules')
        },
        sendFeedback(params: ISiteSendFeedbackParams): Promise<boolean> {
            return send('site.SendFeedback', params)
        },
        topSearchQueries(): Promise<Array<string>> {
            return send('site.TopSearchQueries')
        }
    }
})
