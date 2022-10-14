import {cleanup, render, screen} from "@testing-library/react";
import Rentals from "../Rentals.tsx";

const fakeRV = {
    data:[
        {
            id: 123,
            attributes:{
                name: 'Bulgarian RV'
            },
            relationships:{
                primary_image:{
                    data:{
                        id: 321
                    }
                }
            }
        }
    ],
    included:[
        {
            id: 321,
            attributes:{
                url: 'https://res.cloudinary.com/outdoorsy/image/upload/v1534977687/p/rentals/87626/images/sniexje9bmaxyitfqezp.jpg'
            }
        }
    ]
};

afterEach(cleanup);

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeRV)
        })
    );
});

test('should display fake RV name on api fetch', async () =>{
    render(<Rentals keyword={"trailer"}/>);

    const element = await screen.findByText(fakeRV.data[0].attributes.name);

    expect(element).toBeInTheDocument();
});

test('should display fake RV image on api fetch', async () =>{
    render(<Rentals keyword={"trailer"}/>);

    const element = await screen.findByRole('img');

    expect(element).toBeInTheDocument();
});