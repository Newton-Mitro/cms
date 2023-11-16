import { Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import { RECORDS_PER_PAGE } from 'shared/constants/recordsPerPage';

type Props = {
  onClickHandler: React.Dispatch<React.SetStateAction<string>>;
};

const RecordsPerPage: React.FC<Props> = ({ onClickHandler }) => {
  return (
    <div>
      <Tabs value="10" className="z-0 w-full md:w-max">
        <TabsHeader>
          {RECORDS_PER_PAGE.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="z-0"
              onClick={() => {
                onClickHandler('1');
                onClickHandler(value);
              }}
            >
              &nbsp;&nbsp;{label}&nbsp;&nbsp;
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
};

export default RecordsPerPage;
