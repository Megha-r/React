import React, { Component } from 'react';

import { DataTable, Card } from '@shopify/polaris';

export default class ShopifyTable extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const rows = [
            ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
            ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
            [
              'Navy Merino Wool Blazer with khaki chinos and yellow belt',
              '$445.00',
              124518,
              32,
              '$14,240.00',
            ]
          ];
        return(
        <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'text',
                'numeric',
                'numeric',
                'numeric',
              ]}
              headings={[
                'Product',
                'Price',
                'SKU Number',
                'Net quantity',
                'Net sales',
              ]}
              rows={rows}
              totals={['', '', '', 255, '$155,830.00']}
            />
            </Card>
        )
    }
}