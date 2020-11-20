export default (query, merchants, subCategories) =>
  new Promise(resolve => {
    const { category, subcategory, priceLevel, province, key } = query
    const result = merchants
      .filter(
        data =>
          subCategories.filter(name => name === data.subcategoryName).length >
            0 || category === "ทั้งหมด"
      )
      .filter(
        data =>
          data.subcategoryName === subcategory || subcategory === "ทั้งหมด"
      )
      .filter(data => data.priceLevel === priceLevel || priceLevel < 0)
      .filter(
        data => data.addressProvinceName === province || province === "ทั้งหมด"
      )
      .filter(data => data.shopNameTH.includes(key))
    resolve(result)
  })
