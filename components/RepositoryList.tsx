import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import Avater from "../../assets/images/Avater.jpeg";

interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: ImageSourcePropType;
}

interface ItemProps extends Repository {}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});

const repositories: Repository[] = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: Avatar,
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: Avatar,
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: Avatar,
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: Avatar,
  },
];

const Item: React.FC<ItemProps> = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View>
      <Image source={ownerAvatarUrl} style={styles.avatar} />
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Reviews: {reviewCount}</Text>
    </View>
  );
};

const renderItem = ({ item }: { item: Repository }) => (
  <Item
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    forksCount={item.forksCount}
    stargazersCount={item.stargazersCount}
    ratingAverage={item.ratingAverage}
    reviewCount={item.reviewCount}
    id={item.id}
    ownerAvatarUrl={item.ownerAvatarUrl}
  />
);

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList: React.FC = () => {
  return (
    <View>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RepositoryList;
