export default function decorate(block) {
    const wrapper = document.createElement('div');

    const mainWidget = document.createRange().createContextualFragment(`
    <div
        class="yotpo yotpo-main-widget"
        data-product-id="7656"
        data-name="Clear Whey Isolate"
        data-description="A Refreshing Alternative To Protein Shakes"
        data-url="https://www.bulk.com/uk/clear-whey-isolate.html"
        data-image-url="https://www.bulk.com/media/catalog/product/cache/dcbf0ee06f34c864a5d4e9a28697474e/c/l/clear-whey-grey-bg-apple-and-black-currant-thumb_1_.jpg"
        data-price="34.99"
        data-currency="GBP">
    </div>
    `);
    wrapper.append(mainWidget);
    block.append(wrapper);
}
