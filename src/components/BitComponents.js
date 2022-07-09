import React from 'react';
import { Card, CardTitle, Container, Row, Col } from 'reactstrap';
import { Table } from '@prettytechnical/my-scope.ui.table';
import { Riddle } from '@josmarmunoz/demo.ui.input';
import { Buttons } from '@alfredopt/alfredopt3.ui.buttons';
import { ImageFrames } from '@jose_torres/frame-image.img';
import Button from '@bit/ernestoa13.componenttest.button';


import 'bootstrap/dist/css/bootstrap.css';

const components = [
    [
        {
            name: "Josmar",
            color: "#ff6961",
            component: <Riddle question="The more of this there is, the less you see. What is it?" answer="Darkness" />

        },
        {
            name: "Alfredo",
            color: "#77dd77",
            component: <Buttons buttonNames = {[
                'Button1',
                'Button2',
            ]} />
        },
        {
            name: "Rafa",
            color: "#fdfd96",
            component: <Table
                headers={['October', 'November']}
                footerInfo='November was more productive'
                data={[
                    ['Sales', 'Profit', 'Sales', 'Profit'],
                    ['$200,00', '$50,00', '$300,000', '$70,000'],
                ]}
            />
        }
    ],
    [
        {
            name: "Jose",
            color: "#84b6f4", 
            component: <ImageFrames 
                img="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" 
                variante="primary" 
                title='dog'
            />
        },
        {
            name: "Ernesto",
            color: "#fdcae1",
            component: <Button/>
        },
        {
            name: "Julio",
            color: "#333",
            component: <div>Julio no lo hizo</div>

        }
    ]
]

export const BitComponents = () => {
    return (
        <Container sm="12">
            {
                components.map((row) => (
                    <Row >
                        {row.map((frontend) => (
                            <Col sm={4}>
                                <Card body inverse style={{ backgroundColor: frontend.color, borderColor: frontend.color }}>
                                    <CardTitle>{frontend.name}</CardTitle>
                                    {frontend.component}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))
            }
        </Container>
    )
}