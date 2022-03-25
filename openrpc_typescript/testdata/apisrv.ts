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
    title: string,
    value: string,
    hasMore: boolean,
    items: Array<IApiValue>
}

export interface IApiAnalyticsParams {
    slickjumpId?: string, // ID for tracking system slickjump
    utmSource?: string, // UTM parameter source
    utmMedium?: string, // UTM parameter medium
    utmCampaign?: string, // UTM parameter campaign
    utmTerm?: string, // UTM parameter term
    utmContent?: string, // UTM parameter content
    yuid?: string, // Yandex uid
    turboapp?: string, // Yandex Turboapp
    experimentId?: string, // Experiment ID
    experimentVariant?: string, // Experiment Variant
    widgetUrl?: string, // Widget Url
    deeplinkUrl?: string, // Deeplink Url
    admitaduid?: string, // Admitad uid
    partnerSource?: string, // Partner source
    page?: string, // Event page
    referrer?: string, // Event referrer
    yclid?: string // Yandex yclid
}

export interface IApiAppSettings {
    readOnly: boolean, // API works in readonly mode
    payoutDisabled: boolean, // Payout is disabled
    webvisorDisabled: boolean, // Webvisor is disabled
    cashbackDisabled: boolean, // Cashback is disabled
    deliveryPaymentDisabled: boolean, // Delivery Payment is Disabled
    discountDisabled: boolean, // Discount Program is Disabled
    apps: IApiAppSettingsApps
}

export interface IApiAppSettingsApps {
    lastSupportedVersionAndroid: string, // Last supported version for Android app
    lastActualVersionAndroid: string, // Last actual version for Android app
    lastSupportedVersionIOS: string, // Last supported version for iOS app
    lastActualVersionIOS: string, // Last actual version for iOS app
    webViewAndroid: string, // Url for web view for Android app
    webViewIOS: string, // Url for web view for iOS app
    mapAddressHintAndroid: boolean, // Show map address hint for Android app
    mapAddressHintIOS: boolean // Show map address hint for iOS app
}

export interface IApiArticle {
    articleId: number,
    title: string,
    alias: string,
    foreword: string,
    content: string,
    disclaimer: string,
    author: string,
    publicationDate: string,
    smallImage: string,
    bigImage: string,
    image: string,
    rubric: IApiArticleRubric,
    categories: Array<IApiCategory>,
    tags: Array<IApiArticleTag>,
    disableAds: boolean,
    readingTime: number,
    totalViews: number,
    ratingCount: number,
    rating: number,
    myRating: number,
    authorSummary: IApiArticleAuthorSummary,
    relatedArticles: Array<IApiArticleSummary>,
    commentsCount: number
}

export interface IApiArticleAuthor {
    articleAuthorId: number,
    title: string,
    alias: string,
    position: string,
    image: string,
    email?: string,
    facebook?: string,
    instagram?: string,
    vkontakte?: string,
    experienceYears: number,
    placeOfWork: IApiValue, // deprecated
    placesOfWork: Array<IApiValue>,
    education: Array<IApiValue>,
    licenses: Array<IApiValue>,
    articlesCount: number,
    articlesRating: number,
    articles: Array<IApiArticle>
}

export interface IApiArticleAuthorSummary {
    articleAuthorId: number,
    title: string,
    alias: string,
    image: string,
    position: string,
    experienceYears: number
}

export interface IApiArticleComment {
    commentId: number,
    siteUserId: number,
    name: string,
    content: string,
    isMyPlus: boolean,
    isMyMinus: boolean,
    plusVotes: number,
    minusVotes: number,
    createdAt: string,
    article?: IApiArticle,
    comments: Array<IApiArticleComment>,
    author?: IApiArticleAuthorSummary
}

export interface IApiArticleCommentComplaint {
    commentId: number,
    content: string
}

export interface IApiArticleCommentForm {
    articleId: number,
    content: string,
    commentId?: number
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
    rubricAlias?: string,
    tagAlias?: string,
    authorId?: number,
    query?: string
}

export interface IApiArticleSummary {
    articleId: number,
    title: string,
    alias: string,
    image: string,
    rubric: IApiArticleRubric
}

export interface IApiArticleTag {
    title: string,
    alias: string
}

export interface IApiAuthValidateRegister {
    isValid: boolean,
    isValidEmail: boolean,
    isValidName: boolean,
    isValidPhone: boolean
}

export interface IApiAutocompleteCategory {
    category: IApiCategory,
    image: string,
    imageInfo?: IApiImageInfo
}

export interface IApiAutocompleteSuggest {
    title: string,
    trade?: IApiPropertyValue,
    productIds: Array<number>,
    query?: string
}

export interface IApiBanner {
    type: string,
    orderNumber: number,
    url: string,
    campaign: string,
    productIds: Array<number>,
    label: string,
    image: string
}

export interface IApiBrand {
    title: string,
    url: string,
    imageHash: string,
    campaign: string,
    productIds: Array<number>
}

export interface IApiCart {
    price: number,
    isValid: boolean,
    items: Array<IApiCartItem>,
    pharmacy: IApiPharmacy,
    pharmacyNetwork?: IApiPharmacyNetwork,
    pickupDate: string,
    pickupDateText: string,
    pickupDateRelativeText: string,
    pickupIsToday: boolean,
    reservationEndsAt: string,
    reservationEndsAtText: string,
    economy: number,
    discountCard?: IApiDiscountCard,
    discountRules: IApiCartDiscountRules,
    discount: number,
    discountType: string,
    loyaltyProgram?: IApiCartLoyaltyProgram,
    notice?: string
}

export interface IApiCartAnalogItem {
    target: IApiCartTargetProduct,
    analog?: IApiCartAnalogProduct,
    analogType: string
}

export interface IApiCartAnalogProduct {
    product: IApiProductSummary,
    count: number,
    price: number
}

export interface IApiCartContext {
    pharmacies?: IApiCartContextPharmacies,
    geoObjectId?: number
}

export interface IApiCartContextPharmacies {
    pharmacyIds: Array<number>,
    pickupOnly: boolean
}

export interface IApiCartContextPharmaciesResponse {
    pharmacyIds: Array<number>,
    pickupOnly: boolean,
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
    isPossible: boolean,
    isAvailable: boolean,
    amount: number,
    maxAmount: number,
    minOrderAmount: number,
    hasReferralOrders: boolean,
    isPromocodePossible: boolean,
    isPromocodeApplicable: boolean,
    isBonusesPossible: boolean,
    isBonusesApplicable: boolean,
    rules: string
}

export interface IApiCartItem {
    productId: number,
    count: number,
    error?: string,
    price: number,
    isLowQuantity: boolean,
    expirationDate: string
}

export interface IApiCartLoyaltyProgram {
    price: number,
    partner: IApiPartnerSummary
}

export interface IApiCartOptions {
    isPartial: boolean
}

export interface IApiCartProduct {
    count: number,
    product: IApiProduct
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
    count: number,
    price: number
}

export interface IApiCashbackCampaign {
    id: number,
    categoryId: number,
    title: string,
    alias: string,
    content: string,
    cashbackType: IApiCashbackType,
    startDate: string,
    endDate: string,
    image: string,
    products: Array<IApiProductSummary>,
    tooltips: Array<IApiCashbackTooltip>
}

export interface IApiCashbackCampaignSummary {
    id: number,
    categoryId: number,
    title: string,
    alias: string,
    content: string,
    cashbackType: IApiCashbackType,
    startDate: string,
    endDate: string,
    image: string
}

export interface IApiCashbackCategory {
    id: number,
    title: string,
    alias: string
}

export interface IApiCashbackCounters {
    balance: number, // Current user balance amount
    outcomeAmount: number, // Amount of user payouts
    newIncomeCount: number, // Count of recently approved receipts with cashback items
    newIncomeAmount: number // Amount of recently approved receipts with cashback items
}

export interface IApiCashbackPayoutForm {
    phone: string, // Phone number, 10 digits without "+7"
    amount: number // Payout amount. Err may be insufficient.
}

export interface IApiCashbackReceipt {
    id: number, // Cashback receipt internal uteka ID
    displayId: string, // This ID clients should display for user
    date: string, // Receipt upload date
    amount: number, // Signed receipt cashback amount. May be zero.
    fullAmount: number, // FullAmount full receipt amount
    text: string, // Description
    status: string, // Possible values: waiting, processed, matched
    statusText: string // End user status representation. May be empty
}

export interface IApiCashbackReceiptForm {
    time: string, // Время покупки в формате DD.MM.YY mm:ss. Ошибки: format, required
    sum: string, // Сумма на чеке. Ошибки: required, incorrect
    fn: string, // Заводской номер фискального накопителя (ФН). Ошибки: required, format
    i: number, // Номер фискальных данных ФД (FiscalDocumentId). Ошибки: required, min, max
    fp: number // Фискальный признак данных ФП(Д) (FiscalSign). Ошибки: required, min, max
}

export interface IApiCashbackReceiptItem {
    title: string,
    count: number,
    amount: number,
    cashbackAmount: number
}

export interface IApiCashbackSearch {
    cityId?: number,
    categoryId?: number,
    query?: string
}

export interface IApiCashbackTooltip {
    alias: string,
    title: string,
    description: string
}

export interface IApiCashbackTransaction {
    id: number, // Cashback transaction internal uteka ID
    date: string, // Transaction date
    isIncome: boolean, // Is income
    amount: number, // Signed transaction amount
    text: string, // Description
    status: string, // Possible values: paid, processing, error
    statusText: string // End user status representation. May be empty
}

export interface IApiCashbackType {
    type: string,
    value: number
}

export interface IApiCatalogueItem {
    title: string,
    alias: string,
    tradeId: number,
    count: number,
    minPrice: number,
    maxPrice: number,
    productId?: number,
    diseases: Array<string>,
    category: IApiCategory,
    mainDisease: string,
    country: string,
    producer: string,
    images: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    cashbackType?: IApiCashbackType,
    isAvailable: boolean,
    isAds: boolean
}

export interface IApiCategory {
    categoryId: number,
    title: string,
    alias: string,
    parentTitle?: string,
    parentAlias?: string,
    productsCount: number,
    nodes: Array<IApiCategory>,
    isPopular: boolean,
    color?: string,
    image: string,
    imagePNG1x: string,
    imagePNG2x: string,
    imagePNG3x: string,
    imagePNG4x: string,
    subCategories: Array<IApiSubCategory>
}

export interface IApiCity {
    cityId: number,
    alias: string,
    title: string,
    prepositionalTitle: string,
    prepositionalTitleRegion: string,
    genitiveTitle: string,
    latitude: number,
    longitude: number,
    timezone: string,
    hasDelivery: boolean,
    hasMetro: boolean,
    rectangle: string,
    yandexVerification: string,
    yandexVerificationDesktop: string,
    googleVerification: string,
    googleVerificationDesktop: string,
    phone: string,
    localPhone: string,
    pharmacyCount: number,
    isTop: boolean,
    deliveryLabel: string,
    hasDiscount: boolean,
    hasFolders: boolean
}

export interface IApiCourierInfo {
    courierTypeId: number,
    city: string,
    address: string,
    street: string,
    number: string,
    flat: string,
    entrance: string,
    floor: string,
    intercom: string,
    comment: string
}

export interface IApiDeliveryAddress {
    city: string,
    address: string,
    street: string,
    number: string,
    flat: string,
    entrance: string,
    floor: string,
    intercom: string,
    comment: string
}

export interface IApiDeliveryCart {
    deliveryOption: IApiDeliveryOption,
    items: Array<IApiCartItem>,
    notice?: string
}

export interface IApiDeliveryCourier {
    courierTypeId: number,
    title: string,
    alias: string,
    price: number,
    deliveryPrice: number,
    deliveryInterval: string,
    priceTotal: number,
    pharmacy: IApiPharmacy
}

export interface IApiDeliveryCourierCart {
    deliveryCourier: IApiDeliveryCourier,
    items: Array<IApiCartItem>
}

export interface IApiDeliveryInfo {
    city: string,
    address: string,
    deliveryTypeId: number,
    deliveryType: IApiDeliveryType,
    street: string,
    number: string,
    building: string,
    flat: string,
    entrance: string,
    floor: string,
    intercom: string,
    comment: string,
    latitude?: number,
    longitude?: number
}

export interface IApiDeliveryListItem {
    provider: IApiProvider,
    price: number,
    terms: string,
    termsDetails: string,
    termsLink: string,
    deliveryTypes: IApiDeliveryTypeList,
    cities: Array<string>
}

export interface IApiDeliveryOption {
    deliveryTypeId: number,
    title: string,
    label: string,
    price: number,
    deliveryPrice: number,
    priceTotal: number,
    isInexactPrice: boolean,
    deliveryDate: string,
    deliveryDateText: string,
    deliveryTimeFrom: string,
    deliveryTimeTo: string,
    provider: IApiProvider,
    termsLink: string,
    terms: string,
    paymentTypes: Array<IApiPaymentType>
}

export interface IApiDeliveryType {
    id: number,
    title: string,
    price: number,
    deliveryDate: string,
    deliveryDateText: string,
    deliveryTimeFrom: string,
    deliveryTimeTo: string
}

export interface IApiDeliveryTypeList {
    city: string,
    minPrice: number,
    types: Array<IApiDeliveryType>
}

export interface IApiDiscountCard {
    id: number,
    title: string,
    code: string,
    codeType: string,
    partner?: IApiPartnerSummary
}

export interface IApiDiscountCardForm {
    title: string,
    code: string,
    codeType: string
}

export interface IApiDiscountCounters {
    balance: number,
    transactionsCount: number,
    maxAmount: number,
    minOrderAmount: number,
    hasReferralOrders: boolean,
    isPromocodeApplicable: boolean,
    referralBonuses: number
}

export interface IApiDiscountTransaction {
    date: string,
    isIncome: boolean,
    amount: number,
    label: string,
    isWaiting: boolean
}

export interface IApiEntity {
    id: number,
    title: string
}

export interface IApiFAQCategory {
    id: number,
    title: string,
    alias: string,
    items: Array<IApiFAQItem>
}

export interface IApiFAQItem {
    id: number,
    title: string,
    content: string,
    image: string
}

export interface IApiFeedback {
    name?: string,
    email: string,
    phone?: string,
    subject?: string,
    content?: string,
    organizationName?: string,
    organizationType?: string,
    contact?: string,
    site?: string,
    pharmacies?: string
}

export interface IApiFullCashbackReceipt {
    id: number, // Cashback receipt internal uteka ID
    displayId: string, // This ID clients should display for user
    date: string, // Receipt purchase date
    amount: number, // Signed receipt amount. May be zero.
    text: string, // Description
    status: string, // Possible values: waiting, processed, matched
    statusText: string, // End user status representation. May be empty
    cashbackAmount: number, // Amount of cashback.
    cashbackItemsCount: number, // Count of cashback items, may be 0.
    items: Array<IApiCashbackReceiptItem> // Receipt items
}

export interface IApiGeoObject {
    geoObjectId: number,
    title: string,
    latitude: number,
    longitude: number,
    pharmacyCount: number,
    city: IApiCity
}

export interface IApiGeoObjectAutocompleteItem {
    title: string,
    parentTitle: string,
    pharmacyCount: number,
    geoObjectId?: number,
    city?: IApiCity,
    parent?: IApiGeoObjectAutocompleteParentItem
}

export interface IApiGeoObjectAutocompleteParentItem {
    title: string,
    parentTitle: string,
    pharmacyCount: number,
    geoObjectId?: number,
    city?: IApiCity
}

export interface IApiImageInfo {
    url: string,
    hash: string,
    blurhash: string,
    width: number,
    height: number
}

export interface IApiInstruction {
    desc_id?: string,
    desc_name?: string,
    COMPOSITION: string,
    DRUGFORMDESCR: string,
    PHARMAGROUP: string,
    PHARMAACTIONS: string,
    PHARMADYNAMIC: string,
    PHARMAKINETIC: string,
    INDICATIONS: string,
    CONTRAINDICATIONS: string,
    CAREFULLY: string,
    PREGNANCYUSE: string,
    CHILDREN: string,
    USEMETHODANDDOSES: string,
    SIDEACTIONS: string,
    OVERDOSE: string,
    INTERACTIONS: string,
    SPECIALGUIDELINES: string,
    PRECAUTIONS: string,
    INFLUENCEONVEHICLES: string,
    FORM: string,
    EXPIRATION: string,
    STORAGECONDITIONS: string,
    APTEKA_CONDITION: string,
    REGISTRATIONHOLDER: string,
    MANUFACTURER: string,
    CONSUMERCLAIMS: string,
    CHARACTERS: string,
    ACTONORG: string,
    COMPONENTSPROPERTIES: string,
    PHARMAPROPERTIES: string,
    CLINICALPHARMACOLOGY: string,
    DIRECTION: string,
    RECOMMENDATIONS: string,
    INSTRFORPAC: string,
    LITERATURE: string,
    COMMENT: string
}

export interface IApiInstructionField {
    key: string,
    value: string,
    alias?: string,
    url?: string
}

export interface IApiInstructionFields {
    order: Array<string>,
    results: Array<IApiInstructionField>
}

export interface IApiKit {
    id: number,
    title: string,
    content?: string,
    image: string,
    imageMedium: string,
    imageBig: string,
    imageDesktop: string,
    url: string,
    urlShare: string,
    products: Array<IApiProductSummary>,
    isAvailable: boolean,
    category?: IApiCategory,
    minPrice: number,
    maxPrice: number,
    blocks: Array<IApiKitBlock>
}

export interface IApiKitBlock {
    title: string,
    description: string,
    productIds: Array<number>
}

export interface IApiKitSummary {
    id: number,
    title: string,
    image: string,
    imageHash: string,
    icon: string,
    url: string
}

export interface IApiLastStatus {
    lastCartUpdate: number,
    lastOrderUpdate: number
}

export interface IApiLegalEntity {
    title: string,
    inn: string,
    kpp: string,
    address: string,
    fileName?: string,
    fileUrl?: string,
    fileSize?: number,
    fileExt?: string
}

export interface IApiLegalPartner {
    title: string,
    url: string,
    rulesUrl: string,
    image: string
}

export interface IApiLoginByJWTResponse {
    apiKey: string,
    state: string // exists, new, linked
}

export interface IApiMainBrand {
    title: string,
    url: string,
    imageHash: string,
    campaign: string,
    productIds: Array<number>
}

export interface IApiMainPageGroup {
    title: string,
    sorting: number,
    items: Array<IApiMainPageProduct>
}

export interface IApiMainPageProduct {
    sorting: number,
    showingType: number,
    productId: number,
    title: string,
    alias: string,
    price: number,
    minPrice: number,
    maxPrice: number,
    image: string
}

export interface IApiMainPartner {
    title: string,
    url: string,
    imageHash: string,
    campaign: string,
    productIds: Array<number>
}

export interface IApiMapArea {
    latitude: number,
    longitude: number,
    zoomLevel: number,
    cityId: number
}

export interface IApiMapByListItem {
    id: number,
    distance: number,
    price: number,
    priceAlt: number,
    minPrice: number,
    active: boolean,
    deliveryType: string,
    extendedPickupId: number,
    pickupText: string,
    hasDiscountCard: boolean,
    partnerId?: number,
    hasDiscountPrice: boolean,
    isPartial: boolean,
    cart: Array<IApiMapCartItem>,
    isMissing: boolean
}

export interface IApiMapCartItem {
    productId: number,
    count: number,
    price: number,
    priceAlt: number,
    isLowQuantity: boolean,
    expirationDate: string
}

export interface IApiMapClusterMarker {
    id: string,
    count: number,
    lat: number,
    lon: number,
    distance: number,
    imageUrl: string
}

export interface IApiMapClusterResponse {
    view: IApiMapView,
    filters?: IApiMapFilters,
    count: number,
    map: IApiMapClusterResponseMap,
    pharmacies: Record<number, IApiPharmacy>,
    extendedPickups: Record<number, IApiMapExtendedPickupPrice>,
    pharmacyLists: IApiMapClusterResponsePharmacyLists,
    partners: Record<number, IApiMapPartner>,
    statistics: IApiMapStatistics
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
    network: IApiPharmacyNetwork,
    pickupDate: string,
    pickupDateText: string,
    minPrice: number,
    active: boolean,
    hasDiscountPrice: boolean,
    partnerId?: number,
    isPartial: boolean,
    cart: Array<IApiMapCartItem>
}

export interface IApiMapExtendedPickupPriceSummary {
    id: number,
    pickupText: string
}

export interface IApiMapFilters {
    isOpen?: boolean,
    minPrice?: number,
    maxPrice?: number,
    pickupOnly: boolean,
    pickupTomorrowOnly: boolean,
    pickup1hOnly: boolean,
    extendedPickupOnly: boolean,
    discountPriceOnly: boolean,
    partnerId?: number,
    fullCartOnly: boolean,
    inViewOnly: boolean
}

export interface IApiMapPartner {
    partnerId: number,
    title: string,
    alias: string,
    icon: string
}

export interface IApiMapPharmaciesResponse {
    total: number,
    totalDistinct: number,
    byMinPrice: Array<IApiMapByListItem>,
    byDistance: Array<IApiMapByListItem>,
    pharmacies: Record<number, IApiMapPharmacyPrice>,
    partners: Record<number, IApiMapPartner>,
    statistics: IApiMapStatistics
}

export interface IApiMapPharmacyMarker {
    id: string,
    lat: number,
    lon: number,
    distance: number,
    price: number,
    priceAlt: number,
    minPrice: number,
    active: boolean,
    image: string,
    imageUrl: string,
    pinData: IApiMapPinData,
    pinLogoUrl: string, // deprecated
    pharmacyId: number,
    extendedPickupId?: number,
    extendedPickupIds: Array<number>,
    extendedPickups: Array<IApiMapExtendedPickupPriceSummary>,
    pickupText: string,
    hasDiscountCard: boolean,
    partnerId?: number,
    hasDiscountPrice: boolean,
    isPartial: boolean,
    cart: Array<IApiMapCartItem>
}

export interface IApiMapPharmacyPrice {
    price: number,
    priceAlt: number,
    extendedPickup: IApiMapExtendedPickupPrice, // deprecated
    extendedPickups: Array<IApiMapExtendedPickupPrice>,
    pharmacy: IApiPharmacy,
    minPrice: number,
    active: boolean,
    hasDiscountPrice: boolean,
    partnerId?: number,
    isPartial: boolean,
    cart: Array<IApiMapCartItem>
}

export interface IApiMapPinData {
    isPartial: boolean,
    price: number,
    logoUrl: string,
    inStockCount: number,
    totalCount: number
}

export interface IApiMapPostal {
    city: IApiCity,
    latitude: number,
    longitude: number,
    zoomLevel: number,
    rectangle: string
}

export interface IApiMapSearch {
    cityId: number,
    cart: Array<IApiCartRequestItem>,
    deliveryType: number,
    multiPickup: boolean,
    cartId?: string,
    withPartial: boolean
}

export interface IApiMapStatistics {
    hasPickup: boolean,
    hasPickupFiltered: boolean,
    showExpressButton: boolean,
    showExpress1hButton: boolean,
    showDiscountPriceButton: boolean,
    showFullCartButton: boolean,
    minPrice: number,
    maxPrice: number,
    count: number,
    countInView: number,
    pharmacyCount: number
}

export interface IApiMapView {
    neLat: number,
    neLon: number,
    swLat: number,
    swLon: number,
    zoomLevel: number,
    outsideBox: number,
    myLat: number,
    myLon: number,
    pharmacyId?: number
}

export interface IApiMetaDetail {
    objectClass: string,
    objectType?: string,
    objectTitle?: string,
    objectId?: number,
    pageTitle: string,
    metaKeywords?: string,
    metaDescription?: string,
    alt?: string,
    pageHeader: string,
    productSearch?: IApiProductSearch,
    openGraph: IApiOpenGraph,
    seoTradeReviews: Array<IApiProductReview>,
    seoTradeReviewsAvg?: number,
    seoTradeReviewsCount?: number,
    seoTradeContent?: IApiSEOTradeContent,
    seoInstructions: Array<IApiSEOInstruction>,
    seoCities?: IApiSEOBlock,
    seoBlock?: IApiSEOBlock,
    seoBlockFAQ?: IApiSEOBlock,
    breadcrumbs: Array<IApiValue>,
    tradeLinks: Array<IApiTradeLink>,
    tradeActiveSubstances: Array<IApiValue>,
    tradeAnalogsSearch?: IApiProductSearch,
    tradeAnalogsCount?: number,
    category?: IApiCategory,
    subCategories: Array<IApiValue>,
    propertyValue?: IApiPropertyValue,
    robots?: string,
    product?: IApiProduct
}

export interface IApiOfficeBranch {
    cityId: number,
    latitude: number,
    longitude: number,
    cityTitle: string,
    address: string,
    postalCode: string,
    mapUrl: string
}

export interface IApiOpenGraph {
    title: string,
    description: string,
    type: string,
    image: string,
    url: string,
    site: string
}

export interface IApiOrder {
    orderId: number,
    displayOrderId: string,
    status: IApiStatusOrder,
    profile: IApiProfile,
    pharmacy: IApiPharmacy,
    amount: number,
    amountTotal: number,
    products: Array<IApiProductOrder>,
    createdAt: string,
    reservationEndsAt: string,
    reservationEndsAtText: string,
    deliveryAt?: string,
    deliveryAtText?: string,
    extendedPickup?: IApiPharmacyNetwork,
    type: string,
    deliveryInfo?: IApiDeliveryInfo,
    deliveryProvider?: IApiPharmacyNetwork,
    assemblyStatus?: IApiOrderAssemblyStatus,
    city: IApiCity,
    courierInfo?: IApiOrderCourierInfo,
    partner?: IApiPartnerSummary,
    discountCard?: IApiDiscountCard,
    paymentInfo?: IApiOrderPaymentInfo,
    economy?: IApiOrderEconomy,
    discount: number,
    loyaltyProgram?: IApiOrderLoyaltyProgram,
    notice?: string
}

export interface IApiOrderAssemblyStatus {
    label: string, // deprecated
    endsAtText: string,
    status: string,
    isExpired: boolean,
    percent: number,
    labelExpired: string,
    labelRelative: string, // deprecated
    endsAtRelativeText: string,
    isToday: boolean
}

export interface IApiOrderCounters {
    active: number,
    ready: number,
    completed: number,
    finished: number,
    economy: number
}

export interface IApiOrderCourierInfo {
    deliveryPrice: number,
    deliveryIntervalFrom: string,
    deliveryIntervalTo: string,
    address: IApiDeliveryAddress
}

export interface IApiOrderEconomy {
    title: string,
    value: number
}

export interface IApiOrderLoyaltyProgram {
    price: number,
    partner: IApiPartnerSummary
}

export interface IApiOrderPaymentInfo {
    paymentType: string,
    paymentDeadlineAt: string,
    paymentUrl?: string,
    isPaid: boolean
}

export interface IApiOrderSearch {
    isActive?: boolean,
    isCompleted?: boolean,
    isFinished?: boolean,
    isCancelled?: boolean,
    sorting?: string,
    sortingIsAsc?: boolean
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
    orderId: number,
    displayOrderId: string,
    status: IApiStatusOrder,
    profile: IApiProfile,
    pharmacy: IApiPharmacy,
    amount: number,
    amountTotal: number,
    products: Array<IApiProductOrder>,
    createdAt: string,
    reservationEndsAt: string,
    reservationEndsAtText: string,
    deliveryAt?: string,
    deliveryAtText?: string,
    extendedPickup?: IApiPharmacyNetwork,
    type: string,
    deliveryInfo?: IApiDeliveryInfo,
    deliveryProvider?: IApiPharmacyNetwork,
    assemblyStatus?: IApiOrderAssemblyStatus,
    city: IApiCity,
    courierInfo?: IApiOrderCourierInfo,
    partner?: IApiPartnerSummary,
    discountCard?: IApiDiscountCard,
    paymentInfo?: IApiOrderPaymentInfo,
    economy?: IApiOrderEconomy,
    discount: number,
    loyaltyProgram?: IApiOrderLoyaltyProgram
}

export interface IApiPartner {
    partnerId: number,
    title: string,
    alias: string,
    image: string,
    squareImage: string,
    pharmacyCount: number,
    rulesUrl: string,
    color: string,
    distanceTradingLinks: Array<IApiValue>, // deprecated
    siteUrl: string,
    phone: string,
    legalAddress: string,
    legalName: string,
    legalNameShort: string,
    inn: string,
    ogrn: string,
    description: string,
    fileName?: string,
    fileUrl?: string,
    fileSize?: number,
    fileExt?: string,
    rules: string,
    loyaltyRules: string,
    distanceTradingRules: string
}

export interface IApiPartnerLoyaltyProgramRules {
    partner: IApiPartnerSummary,
    list: Array<string>
}

export interface IApiPartnerSummary {
    partnerId: number,
    title: string,
    alias: string,
    image: string,
    squareImage: string,
    pharmacyCount: number,
    rulesUrl: string,
    color: string,
    distanceTradingLinks: Array<IApiValue> // deprecated
}

export interface IApiPaymentInfo {
    paymentType: string
}

export interface IApiPaymentType {
    title: string,
    alias: string,
    isPaymentRequired: boolean
}

export interface IApiPharmacy {
    id: number,
    pharmacyNetworkId: number,
    network: string,
    title: string,
    alias: string,
    address: string,
    metroStationId?: number,
    metroStation?: IApiStation,
    workingHours?: Array<string>, // deprecated
    workingHoursText: string,
    latitude: number,
    longitude: number,
    is24hour: boolean,
    isFavorite: boolean,
    orderNumber: number, // deprecated
    confirmationText: string, // deprecated
    city: string,
    image: string,
    outOfTurn: boolean, // deprecated
    orderConfirmationTime: number,
    openCloseText: string,
    pickupText: string,
    fullPickupText: string,
    timezone: string,
    isOpen: boolean,
    cashOnly: boolean,
    phone: string,
    phoneExtended: string,
    hasDiscount: boolean,
    hasPickupToday: boolean,
    hasExtendedPickup: boolean
}

export interface IApiPharmacyCard {
    id: number,
    pharmacyNetworkId: number,
    network: string,
    title: string,
    alias: string,
    address: string,
    metroStationId?: number,
    metroStation?: IApiStation,
    workingHours?: Array<string>, // deprecated
    workingHoursText: string,
    latitude: number,
    longitude: number,
    is24hour: boolean,
    isFavorite: boolean,
    orderNumber: number, // deprecated
    confirmationText: string, // deprecated
    city: string,
    image: string,
    outOfTurn: boolean, // deprecated
    orderConfirmationTime: number,
    openCloseText: string,
    pickupText: string,
    fullPickupText: string,
    timezone: string,
    isOpen: boolean,
    cashOnly: boolean,
    phone: string,
    phoneExtended: string,
    hasDiscount: boolean,
    hasPickupToday: boolean,
    hasExtendedPickup: boolean,
    nearestPharmacies: Array<IApiPharmacy>
}

export interface IApiPharmacyClusterMarker {
    id: string,
    count: number,
    latitude: number,
    longitude: number,
    distance: number,
    imageUrl: string
}

export interface IApiPharmacyClusterResponse {
    view: IApiMapView,
    count: number,
    map: IApiPharmacyClusterResponseMap,
    pharmacyList: Array<IApiPharmacy>
}

export interface IApiPharmacyClusterResponseMap {
    pharmacyMarkers: Array<IApiPharmacyMarker>,
    clusterMarkers: Array<IApiPharmacyClusterMarker>
}

export interface IApiPharmacyCount {
    count: number,
    priceMin: number,
    priceMax: number,
    pharmacyMinPrice: number,
    deliveryAtText: string,
    active: boolean,
    isDeliveryAvailable: boolean,
    isDeliveryCourierAvailable: boolean // deprecated
}

export interface IApiPharmacyMarker {
    id: string,
    latitude: number,
    longitude: number,
    distance: number,
    pharmacy: IApiPharmacy
}

export interface IApiPharmacyNetwork {
    id: number,
    title: string,
    image: string,
    imageHash: string,
    phones: Array<string>,
    externalId: string,
    outOfTurn: boolean,
    orderConfirmationTime: number
}

export interface IApiPharmacySearch {
    cityId: number,
    partnerIds: Array<number>,
    pickupOnly: boolean,
    discountPriceOnly: boolean,
    cartId?: string
}

export interface IApiPharmacyStatistics {
    count: number,
    hasPickup: boolean,
    hasDiscountPrice: boolean
}

export interface IApiPicture {
    bigUrl: string,
    mediumUrl: string,
    smallUrl: string
}

export interface IApiPopularQuery {
    title: string,
    url: string,
    productSearch: IApiProductSearch,
    singleProductId?: number,
    productIds: Array<number>
}

export interface IApiPrescription {
    prescriptionId: number,
    createdAt: string,
    dateEnd: string,
    organization: string,
    address: string,
    titles: Array<string>,
    items: Array<IApiPrescriptionItem>
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
    prescriptionId: number,
    createdAt: string,
    dateEnd: string,
    organization: string,
    address: string,
    titles: Array<string>
}

export interface IApiProduct {
    productId: number,
    title: string,
    subtitle: string,
    fullTitle: string,
    propTitle: string,
    fullProducer: string,
    alias: string,
    minPrice: number,
    maxPrice: number,
    avgPrice: number,
    isAvailable: boolean,
    hasInstruction: boolean,
    hasRecipe: boolean,
    amount: number,
    amountText: string,
    dosage?: string,
    packDosage?: string,
    dose?: string,
    dosageFormSize?: string,
    pack1n?: string,
    producer?: string,
    country?: string,
    activeSubstance?: string,
    diseases: Array<string>,
    images: Array<string>,
    imageHashes: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    category?: IApiCategory,
    mainDisease?: string,
    dfc?: string,
    pharmacyCount: number,
    pharmacyPickupCount: number,
    pickup: boolean,
    delivery: boolean,
    reviewRating?: number,
    reviewCount: number,
    label?: string,
    campaign?: string,
    lastPrice?: number,
    lastDate?: string,
    cashbackType?: IApiCashbackType,
    trade?: IApiPropertyValue,
    weight: number,
    weightApps: number,
    quantity: number,
    isAds: boolean,
    GRLSUrl?: string,
    quantityDelivery: number,
    instruction?: IApiInstruction,
    analogsCount: number, // deprecated
    isFavorite: boolean,
    reviewSummary: Array<IApiProductReview>,
    activeSubstanceProperty?: IApiPropertyValue,
    values: Array<IApiValue>,
    categoryProperties: Array<IApiProperty>,
    seoLinks: Array<IApiSeoLink>,
    seoBlockTitle: string,
    seoBlockTitleShort: string,
    strictAnalogsCount?: number,
    strictAnalogsMinPrice?: number,
    certificates: Array<string>,
    certificatesPictures: Array<IApiPicture>,
    releaseForms: Array<IApiReleaseForm>,
    analogBanner?: IApiProductSummary,
    tradeProductsCount: number,
    producerProperty?: IApiPropertyValue,
    propertyValueListings: Array<IApiValue>
}

export interface IApiProductAutocompleteInfo {
    promoProduct?: IApiProductSummary,
    suggests: Array<IApiAutocompleteSuggest>,
    trades: Array<IApiPropertyValue>,
    categories: Array<IApiAutocompleteCategory>,
    producers: Array<IApiPropertyValue>,
    products: Array<IApiProductSummary>
}

export interface IApiProductBanner {
    bannerType: string,
    title: string,
    url: string
}

export interface IApiProductFilters {
    count?: number,
    countDelivery?: number,
    minPrice?: number,
    maxPrice?: number,
    mainProperties: Array<IApiPropertyValue>,
    properties: Array<IApiProperty>,
    categories: Array<IApiCategory>
}

export interface IApiProductOfTheDay {
    categoryId: number,
    product: IApiProductSummary
}

export interface IApiProductOrder {
    productId: number,
    title: string,
    subtitle: string,
    fullTitle: string,
    propTitle: string,
    fullProducer: string,
    alias: string,
    minPrice: number,
    maxPrice: number,
    avgPrice: number,
    isAvailable: boolean,
    hasInstruction: boolean,
    hasRecipe: boolean,
    amount: number,
    amountText: string,
    dosage?: string,
    packDosage?: string,
    dose?: string,
    dosageFormSize?: string,
    pack1n?: string,
    producer?: string,
    country?: string,
    activeSubstance?: string,
    diseases: Array<string>,
    images: Array<string>,
    imageHashes: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    category?: IApiCategory,
    mainDisease?: string,
    dfc?: string,
    pharmacyCount: number,
    pharmacyPickupCount: number,
    pickup: boolean,
    delivery: boolean,
    reviewRating?: number,
    reviewCount: number,
    label?: string,
    campaign?: string,
    lastPrice?: number,
    lastDate?: string,
    cashbackType?: IApiCashbackType,
    trade?: IApiPropertyValue,
    weight: number,
    weightApps: number,
    quantity: number,
    isAds: boolean,
    GRLSUrl?: string,
    price: number,
    count: number,
    isLowQuantity: boolean,
    expirationDate: string
}

export interface IApiProductPartnerPrice {
    partnerId: number,
    partner: IApiPartnerSummary,
    minPrice: number,
    hasOtherPrices: boolean,
    pharmacyCount: number
}

export interface IApiProductPrice {
    productId: number,
    minPrice: number,
    maxPrice: number,
    pharmacyCount: number,
    pickup: boolean,
    delivery: boolean,
    isAvailable: boolean
}

export interface IApiProductPriceHistory {
    label: string,
    minPrice: number,
    maxPrice: number,
    avgPrice: number
}

export interface IApiProductReminder {
    productReminderId: number,
    startAt: string,
    scheduleUsage: number,
    frequency: number,
    medicationRule: IApiValue,
    duration?: number,
    schedule: Array<IApiReminderScheduleItem>,
    notificationSettings?: IApiReminderNotification,
    product?: IApiProductSummary,
    scheduleProgress: Array<IApiReminderScheduleProgressItem>
}

export interface IApiProductReminderSummary {
    productReminderId: number,
    startAt: string,
    scheduleUsage: number,
    frequency: number,
    medicationRule: IApiValue,
    duration?: number,
    schedule: Array<IApiReminderScheduleItem>,
    notificationSettings?: IApiReminderNotification,
    product?: IApiProductSummary
}

export interface IApiProductReview {
    reviewId: number,
    siteUserId?: number,
    name: string,
    rating: number,
    content: string,
    advantages: string,
    disadvantages: string,
    imageHashes: Array<string>,
    isMyPlus: boolean,
    isMyMinus: boolean,
    plusVotes: number,
    minusVotes: number,
    createdAt: string,
    isVerified: boolean,
    product?: IApiProductSummary,
    comments: Array<IApiProductReviewComment>
}

export interface IApiProductReviewComment {
    commentId: number,
    reviewId: number,
    siteUserId: number,
    name: string,
    avatarHash: string,
    content: string,
    isMyPlus: boolean,
    isMyMinus: boolean,
    plusVotes: number,
    minusVotes: number,
    createdAt: string,
    isProducer: boolean
}

export interface IApiProductReviewCommentRating {
    isMyPlus: boolean,
    isMyMinus: boolean,
    plusVotes: number,
    minusVotes: number
}

export interface IApiProductReviewRating {
    isMyPlus: boolean,
    isMyMinus: boolean,
    plusVotes: number,
    minusVotes: number
}

export interface IApiProductReviewReleaseForm {
    releaseFormId: number,
    title: string,
    reviewCount: number,
    rating: number
}

export interface IApiProductReviewStatistics {
    totalCount: number,
    releaseForms: Array<IApiProductReviewReleaseForm>
}

export interface IApiProductSearch {
    analogProductId?: number,
    excludeProductId?: number,
    productIds?: Array<number>,
    query?: string,
    categoryId?: number,
    categoryIds?: Array<number>,
    filterCategoryIds?: Array<number>,
    tradeId?: number,
    tradeIds?: Array<number>,
    propertyValueIds?: Array<number>,
    filterPropertyValueIds?: Array<number>,
    excludePropertyValueIds?: Array<number>,
    mainPropertyIds?: Array<number>,
    isPopular?: boolean,
    cityId?: number,
    pharmacyIds?: Array<number>,
    sorting?: string,
    sortingIsAsc?: boolean,
    priceMin?: number,
    priceMax?: number,
    showDisabled?: boolean,
    withChildCategories?: boolean,
    withDelivery?: boolean,
    cartId?: string,
    mergedPropertyIds?: Array<number>
}

export interface IApiProductSummary {
    productId: number,
    title: string,
    subtitle: string,
    fullTitle: string,
    propTitle: string,
    fullProducer: string,
    alias: string,
    minPrice: number,
    maxPrice: number,
    avgPrice: number,
    isAvailable: boolean,
    hasInstruction: boolean,
    hasRecipe: boolean,
    amount: number,
    amountText: string,
    dosage?: string,
    packDosage?: string,
    dose?: string,
    dosageFormSize?: string,
    pack1n?: string,
    producer?: string,
    country?: string,
    activeSubstance?: string,
    diseases: Array<string>,
    images: Array<string>,
    imageHashes: Array<string>,
    imageInfos: Array<IApiImageInfo>,
    category?: IApiCategory,
    mainDisease?: string,
    dfc?: string,
    pharmacyCount: number,
    pharmacyPickupCount: number,
    pickup: boolean,
    delivery: boolean,
    reviewRating?: number,
    reviewCount: number,
    label?: string,
    campaign?: string,
    lastPrice?: number,
    lastDate?: string,
    cashbackType?: IApiCashbackType,
    trade?: IApiPropertyValue,
    weight: number,
    weightApps: number,
    quantity: number,
    isAds: boolean,
    GRLSUrl?: string
}

export interface IApiProfile {
    id: number,
    phone: string,
    name: string,
    email: string,
    cityId: number,
    addressHome: string,
    addressWork: string,
    isPushNotificationEnabled: boolean,
    isEmailNotificationEnabled: boolean,
    isMarketingNotificationEnabled: boolean,
    withBayerPersonalData: boolean,
    withOTCPersonalData: boolean
}

export interface IApiProfileFavoriteProductSearch {
    cityId?: number,
    sorting?: string,
    sortingIsAsc?: boolean,
    cartId?: string
}

export interface IApiProfileOrderProductSearch {
    cityId?: number,
    sorting?: string,
    sortingIsAsc?: boolean,
    cartId?: string
}

export interface IApiProfileRegister {
    isMarketingNotificationEnabled?: boolean,
    withBayerPersonalData?: boolean,
    withOTCPersonalData?: boolean
}

export interface IApiProfileUpdate {
    name?: string,
    email?: string,
    cityId?: number,
    addressHome?: string,
    addressWork?: string,
    isPushNotificationEnabled?: boolean,
    isEmailNotificationEnabled?: boolean,
    isMarketingNotificationEnabled?: boolean,
    iOSfcmToken?: string,
    androidFcmToken?: string,
    gender?: string,
    birthDate?: string,
    gaid?: string,
    idfa?: string,
    withBayerPersonalData?: boolean,
    withOTCPersonalData?: boolean
}

export interface IApiPromoItem {
    title: string,
    url: string,
    image: string,
    productId: number,
    tradeId?: number,
    campaign?: string,
    productIds: Array<number>
}

export interface IApiProperty {
    propertyId: number,
    title: string,
    description: string,
    alias: string,
    values: Array<IApiPropertyValue>
}

export interface IApiPropertyValue {
    propertyValueId: number,
    propertyId: number,
    title: string,
    alias: string,
    url?: string,
    image?: string,
    imageInfo?: IApiImageInfo,
    hasInstruction: boolean
}

export interface IApiProvider {
    id: number,
    pharmacyNetworkId: number,
    title: string,
    image: string,
    phones: Array<string>
}

export interface IApiProviderCount {
    count: number,
    priceMin?: number,
    priceMax?: number,
    priceDeliveryMin: number
}

export interface IApiReadingLink {
    url: string,
    image: string,
    alt: string,
    description: string
}

export interface IApiReleaseForm {
    productId: number,
    title: string,
    alias: string,
    minPrice: number
}

export interface IApiReminderForm {
    productReminderId: number,
    productId: number,
    startAt: string, // Начало курса
    scheduleUsage: number, // Частота приёма лекарства в месяц (ежедневно, раз в 2 дня и т.п.)
    frequency: number, // Частота приёма лекарства в день
    medicationRule: string, // Правило приема
    schedule: Array<IApiReminderScheduleItem>, // График времени приема лекарств
    duration?: number, // Длительность курса, null - постоянно
    notificationSettings?: IApiReminderNotification
}

export interface IApiReminderNotification {
    currentStocks: number, // Текущий запас препарата
    notificationStocks: number // Запас препарата для напоминания
}

export interface IApiReminderProgressForm {
    productReminderId: number,
    progressAdd: Array<string>,
    progressRemove: Array<string>
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
    commentId: number,
    content: string
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
    productId: number,
    rating: number,
    content: string,
    advantages: string,
    disadvantages: string,
    imageHashes: Array<string>
}

export interface IApiSEOBlock {
    title: string,
    type: string,
    text: string,
    items: Array<IApiSEOBlockItem>
}

export interface IApiSEOBlockItem {
    title: string,
    text: string,
    url: string,
    class: string,
    cityId: number,
    cityAlias: string,
    minPrice: number
}

export interface IApiSEOInstruction {
    key: string,
    product: IApiProductSummary,
    values: Array<IApiInstructionField>,
    instructions: Array<IApiInstructionField>,
    certificates: Array<string>,
    certificatesPictures: Array<IApiPicture>
}

export interface IApiSEOTradeContent {
    title: string,
    content: string
}

export interface IApiSeoLink {
    group: string,
    url: string,
    title: string
}

export interface IApiSiteBusinessCounters {
    siteTraffic: IApiValue,
    appsTraffic: IApiValue,
    turnover: IApiValue,
    pharmacies: IApiValue,
    products: IApiValue
}

export interface IApiSiteCounters {
    years: IApiValue,
    products: IApiValue,
    visitors: IApiValue,
    networks: IApiValue,
    regions: IApiValue,
    pharmacies: IApiValue,
    economy: IApiValue
}

export interface IApiStation {
    stationId: number,
    cityId: number,
    title: string,
    color: string,
    latitude: number,
    longitude: number
}

export interface IApiStatusOrder {
    statusId: number,
    userStatusId: number,
    name: string,
    description: string,
    workflowPercent: number,
    reservationPercent: number,
    color: string,
    colorHex: string,
    imageSvg: string,
    imagePng1x: string,
    imagePng2x: string,
    imagePng3x: string,
    imagePng4x: string,
    isCurrent: boolean,
    isReady: boolean,
    isCollecting: boolean,
    isCancelled: boolean,
    isCompleted: boolean,
    isCancelable: boolean,
    isCompletableByUser: boolean,
    isCancelledCompletableByUser: boolean,
    isDeletableByUser: boolean,
    isAddable: boolean,
    addableTill?: string
}

export interface IApiSubCategory {
    id: number,
    title: string,
    alias: string,
    categoryId: number,
    mergedPropertyIds: Array<number>
}

export interface IApiSuggestAddress {
    title: string,
    subtitle: string,
    fullTitle: string,
    type: string,
    latitude: number,
    longitude: number,
    rectangle: string
}

export interface IApiSuggestAddressDelivery {
    title: string,
    subtitle: string,
    fullTitle: string,
    type: string,
    street: string,
    number: string,
    isDeliveryAvailable: boolean
}

export interface IApiTradeLink {
    title: string,
    url: string,
    image: string,
    minPrice: number,
    productsCount: number
}

export interface IApiUserCartResponse {
    result: boolean,
    missingProducts: Array<IApiCartProduct>,
    cartId: string,
    cityId: number,
    cart: Array<IApiCartProduct>,
    cartPickUp: Array<IApiCartProduct>, // deprecated
    cartDelivery: Array<IApiCartProduct>, // deprecated
    pharmacyCountPickUp?: IApiPharmacyCount,
    pharmacyCountDelivery?: IApiPharmacyCount,
    isDeliveryPossible: boolean,
    isDeliveryAvailable: boolean,
    isDeliveryCourierAvailable: boolean, // deprecated
    cartContext?: IApiCartContextResponse,
    lastCartUpdate: number,
    hasCompletePickUp: boolean
}

export interface IApiValue {
    title: string,
    value: string
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
    max: number, // Max value for field.
    min: number // Min value for field.
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
        saveCard(params: IDiscountSaveCardParams): Promise<object> {
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
        referral(): Promise<object> {
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
        promocodeBanner(): Promise<object> {
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
